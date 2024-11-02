'use client'

import {
    IconCommand,
    IconGauge,
    IconHeadphones,
    IconLogOut,
    IconMonitor,
    IconMoon,
    IconSettings,
    IconSun
} from 'cleon-icons'
import { useTheme } from 'next-themes'

import { Avatar, Menu } from '@/components/ui'

export default function MenuWithIconDemo() {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <Menu>
            <Menu.Trigger>
                <Avatar alt='dq-alhq' className='size-10' src='https://github.com/dq-alhq.png' />
            </Menu.Trigger>
            <Menu.Content placement='bottom' showArrow className='sm:min-w-64'>
                <Menu.Section>
                    <Menu.Header separator>
                        <span className='block'>DQ Al-Haqqi</span>
                        <span className='font-normal text-muted-foreground'>@dq-alhq</span>
                    </Menu.Header>
                </Menu.Section>

                <Menu.Item href='#dashboard'>
                    <IconGauge />
                    Dashboard
                </Menu.Item>
                <Menu.Item href='#settings'>
                    <IconSettings />
                    Settings
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item>
                    <IconCommand />
                    Command Menu
                </Menu.Item>
                <Menu.Submenu>
                    <Menu.Item>
                        {resolvedTheme === 'light' ? (
                            <IconSun />
                        ) : resolvedTheme === 'dark' ? (
                            <IconMoon />
                        ) : (
                            <IconMonitor />
                        )}
                        Switch theme
                    </Menu.Item>
                    <Menu.Content>
                        <Menu.Item onAction={() => setTheme('system')}>
                            <IconMonitor /> System
                        </Menu.Item>
                        <Menu.Item onAction={() => setTheme('dark')}>
                            <IconMoon /> Dark
                        </Menu.Item>
                        <Menu.Item onAction={() => setTheme('light')}>
                            <IconSun /> Light
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Submenu>
                <Menu.Separator />
                <Menu.Item href='#contact-s'>
                    <IconHeadphones />
                    Contact Support
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href='#logout'>
                    <IconLogOut />
                    Log out
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
