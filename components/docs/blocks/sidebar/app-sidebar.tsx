'use client'

import {
    IconAppWindowMac,
    IconBrandLinux,
    IconChevronDown,
    IconCircleUser,
    IconGauge,
    IconLogOut,
    IconMoon,
    IconPanelLeft,
    IconPanelLeftClose,
    IconPanelLeftDashed,
    IconPanelRight,
    IconPanelRightOpen,
    IconSun
} from 'cleon-icons'
import { usePathname } from 'next/navigation'

import { useTheme } from '@/components/providers'
import { Avatar, Button, Link, Menu, Sidebar, useSidebar } from '@/components/ui'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
    const { theme, setTheme } = useTheme()
    const { state } = useSidebar()
    const collapsed = state === 'collapsed'
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
                    <SidebarItem icon={IconGauge} href='/blocks/sidebar/sidebar-basic-demo'>
                        Sidebar
                    </SidebarItem>
                </Sidebar.Section>
                <Sidebar.Section collapsible title='Variant'>
                    <SidebarItem icon={IconPanelRight} href='/blocks/sidebar/sidebar-default-demo'>
                        Default
                    </SidebarItem>
                    <SidebarItem
                        icon={IconPanelLeftDashed}
                        href='/blocks/sidebar/sidebar-floating-demo'
                    >
                        Floating
                    </SidebarItem>
                    <SidebarItem icon={IconAppWindowMac} href='/blocks/sidebar/sidebar-inset-demo'>
                        Inset
                    </SidebarItem>
                </Sidebar.Section>
                <Sidebar.Section collapsible title='Collapsible'>
                    <SidebarItem icon={IconPanelLeftClose} href='/blocks/sidebar/sidebar-dock-demo'>
                        Dock
                    </SidebarItem>
                    <Sidebar.Item
                        icon={IconPanelRightOpen}
                        href='/blocks/sidebar/sidebar-off-canvas-demo'
                    >
                        Off Canvas
                    </Sidebar.Item>
                    <Sidebar.Item icon={IconPanelLeft} href='/blocks/sidebar/sidebar-fixed-demo'>
                        Fixed
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
                            DQ Al-Haqqi
                            <IconChevronDown className='right-3 size-4 absolute group-pressed:rotate-180 transition-transform' />
                        </span>
                    </Button>
                    <Menu.Content
                        placement={collapsed ? 'right' : 'top'}
                        className={collapsed ? 'sm:min-w-56' : 'min-w-[--trigger-width]'}
                    >
                        <Menu.Item href='#'>
                            <IconCircleUser />
                            Profile
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item onAction={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            {theme === 'light' ? <IconMoon /> : <IconSun />}
                            Dark Mode
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item isDanger href='#'>
                            <IconLogOut />
                            Log out
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </Sidebar.Footer>
            <Sidebar.Rail />
        </Sidebar>
    )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof Sidebar.Item>) {
    const pathname = usePathname()
    return <Sidebar.Item isCurrent={pathname === props.href} icon={Icon} {...props} />
}
