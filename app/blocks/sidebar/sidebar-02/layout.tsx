'use client'

import * as React from 'react'

import {
    IconChevronDown,
    IconLogout,
    IconSearch,
    IconSettings,
    IconShield,
    IconUserCircle
} from 'cleon-icons'

import { AppSidebar } from '@/app/blocks/sidebar/app-sidebar'
import { CommandPalette } from '@/components/layouts/command-menu'
import { Avatar, Breadcrumbs, Button, Menu, Separator, Sidebar } from '@/components/ui'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <CommandPalette setOpen={setOpen} open={open} />

            <Sidebar.Provider>
                <AppSidebar collapsible='dock' variant='inset' />
                <Sidebar.Inset>
                    <header className='sticky justify-between sm:justify-start top-0 h-[3.57rem] px-4 flex items-center gap-x-2'>
                        <span className='flex items-center gap-x-4'>
                            <Sidebar.Trigger className='-mx-2' />
                            <Separator className='h-6 md:block hidden' orientation='vertical' />

                            <Breadcrumbs className='md:flex hidden'>
                                <Breadcrumbs.Item href='/blocks/sidebar/sidebar-01'>
                                    Dashboard
                                </Breadcrumbs.Item>

                                <Breadcrumbs.Item>Settings</Breadcrumbs.Item>
                            </Breadcrumbs>
                        </span>
                        <div className='flex sm:hidden items-center gap-x-2'>
                            <Button variant='ghost' aria-label='Search...' size='icon'>
                                <IconSearch />
                            </Button>
                            <Menu>
                                <Menu.Trigger
                                    aria-label='Profile'
                                    className='flex items-center gap-x-2 group'
                                >
                                    <Avatar
                                        size='sm'
                                        shape='circle'
                                        src='https://github.com/dq-alhq.png'
                                    />
                                    <IconChevronDown className='size-4 group-pressed:rotate-180 transition-transform' />
                                </Menu.Trigger>
                                <Menu.Content className='min-w-[--trigger-width]'>
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
                                    <Menu.Item href='#'>
                                        <IconLogout />
                                        Log out
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu>
                        </div>
                    </header>
                    <div className='p-4 lg:p-6'>{children}</div>
                </Sidebar.Inset>
            </Sidebar.Provider>
        </>
    )
}
