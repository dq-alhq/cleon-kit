'use client'

import * as React from 'react'

import {
    IconArchive,
    IconBag,
    IconBrandLinux,
    IconChevronDown,
    IconCreditCard,
    IconDashboard,
    IconLogout,
    IconMail,
    IconMessage,
    IconMoon,
    IconPlus,
    IconSettings,
    IconShield,
    IconSun,
    IconUserCircle,
    IconUserPlus,
    IconUsers
} from 'cleon-icons'
import { usePathname } from 'next/navigation'

import { useTheme } from '@/components/providers'
import { Avatar, Button, Link, Menu, Sidebar, useSidebar } from '@/components/ui'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
    const { theme, setTheme } = useTheme()
    const { state } = useSidebar()
    const collapsed = state === 'collapsed'
    const pathname = usePathname()
    return (
        <Sidebar {...props}>
            <Sidebar.Header>
                <Link
                    className='flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2'
                    href='/docs/components/layouts/sidebar'
                >
                    <IconBrandLinux className='size-5' />
                    <strong className='font-medium group-data-[collapsible=dock]:hidden'>
                        Linux
                    </strong>
                </Link>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.Section>
                    <SidebarItem icon={IconDashboard} href='/blocks/sidebar/sidebar-01'>
                        Overview
                    </SidebarItem>
                    <SidebarItem icon={IconSettings} href='/blocks/sidebar/sidebar-02'>
                        Settings
                    </SidebarItem>
                    <SidebarItem icon={IconCreditCard} href='/blocks/sidebar/sidebar-03'>
                        Billing
                    </SidebarItem>
                    <SidebarItem icon={IconMail} href='/blocks/sidebar/sidebar-04' badge='49.67K'>
                        Newsletter
                    </SidebarItem>
                    <Sidebar.Item icon={IconMessage} href='#' badge={35}>
                        Messages
                    </Sidebar.Item>
                </Sidebar.Section>
                <Sidebar.Section title='Projects'>
                    <Sidebar.Item icon={IconBag} href='#'>
                        All Projects
                    </Sidebar.Item>
                    <Sidebar.Item icon={IconPlus} href='#'>
                        Create New Project
                    </Sidebar.Item>
                    <Sidebar.Item icon={IconArchive} href='#'>
                        Archived Projects
                    </Sidebar.Item>
                </Sidebar.Section>

                <Sidebar.Section collapsible title='Team'>
                    <Sidebar.Item icon={IconUsers} href='#'>
                        Team Overview
                    </Sidebar.Item>
                    <Sidebar.Item icon={IconUserPlus} href='#'>
                        Add New Member
                    </Sidebar.Item>
                    <Sidebar.Item icon={IconUserCircle} href='#'>
                        Manage Roles
                    </Sidebar.Item>
                </Sidebar.Section>
            </Sidebar.Content>
            <Sidebar.Footer className='lg:flex lg:flex-row hidden items-center'>
                <Menu>
                    <Button
                        variant='ghost'
                        aria-label='Profile'
                        slot='menu-trigger'
                        className='group'
                    >
                        <Avatar size='sm' shape='square' src='https://github.com/dq-alhq.png' />
                        <span className='group-data-[collapsible=dock]:hidden flex items-center justify-center'>
                            Saul Hudson
                            <IconChevronDown className='right-3 size-4 absolute group-pressed:rotate-180 transition-transform' />
                        </span>
                    </Button>
                    <Menu.Content
                        placement={collapsed ? 'right' : 'top'}
                        className={collapsed ? 'sm:min-w-56' : 'min-w-[--trigger-width]'}
                    >
                        <Menu.Item href='#'>
                            <IconUserCircle />
                            Profile
                        </Menu.Item>
                        <Menu.Item href='#'>
                            <IconSettings />
                            Settings
                        </Menu.Item>
                        <Menu.Item href='#'>
                            <IconShield />
                            Security
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item onAction={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            {theme === 'light' ? <IconMoon /> : <IconSun />}
                            Preferences
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item href='#'>
                            <IconLogout />
                            Log out
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </Sidebar.Footer>
            {pathname !== '/blocks/sidebar/sidebar-02' && <Sidebar.Rail />}
        </Sidebar>
    )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof Sidebar.Item>) {
    const pathname = usePathname()
    return <Sidebar.Item isCurrent={pathname === props.href} icon={Icon} {...props} />
}
