'use client'

import { IconHash, IconHeadphones, IconLogOut, IconPlus, IconSettings } from 'cleon-icons'

import { Avatar, Menu } from '@/components/ui'

export default function MenuWithArrowDemo() {
    return (
        <>
            <Menu>
                <Menu.Trigger aria-label='Open Menu'>
                    <Avatar className='size-10' src='https://github.com/dq-alhq.png' />
                </Menu.Trigger>
                <Menu.Content placement='bottom' showArrow className='min-w-64'>
                    <Menu.Header separator>
                        <span className='block'>DQ Al-Haqqi</span>
                        <span className='font-normal text-muted-foreground'>@dq-alhq</span>
                    </Menu.Header>
                    <Menu.Item>
                        <IconSettings />
                        Pengaturan
                    </Menu.Item>
                    <Menu.Item href='#'>
                        <IconPlus />
                        Create Team
                    </Menu.Item>
                    <Menu.Item href='#'>
                        <IconHash />
                        Command Menu
                        <Menu.Keyboard keys='⌘K' />
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Item href='#'>
                        <IconHeadphones />
                        Contact Support
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>
                        <IconLogOut />
                        Log out
                    </Menu.Item>
                </Menu.Content>
            </Menu>
        </>
    )
}
