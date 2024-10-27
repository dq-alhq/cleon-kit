'use client'

import React from 'react'

import { Button, Command } from '@/components/ui'

export default function CommandKeyboardDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button variant='outline' onPress={() => setIsOpen(true)}>
                Open
            </Button>
            <Command isOpen={isOpen} onOpenChange={setIsOpen}>
                <Command.Input placeholder='Quick search...' />
                <Command.List>
                    <Command.Item>
                        Account Settings
                        <Command.Keyboard keys='⌘A' />
                    </Command.Item>

                    <Command.Item>
                        Profile
                        <Command.Keyboard keys='⌘P' />
                    </Command.Item>

                    <Command.Item>
                        Notifications
                        <Command.Keyboard keys='⌘N' />
                    </Command.Item>

                    <Command.Item>
                        Privacy Settings
                        <Command.Keyboard keys='⌘S' />
                    </Command.Item>

                    <Command.Item>
                        Billing Information
                        <Command.Keyboard keys='⌘B' />
                    </Command.Item>

                    <Command.Item>
                        Logout
                        <Command.Keyboard keys='⌘L' />
                    </Command.Item>
                </Command.List>
            </Command>
        </>
    )
}
