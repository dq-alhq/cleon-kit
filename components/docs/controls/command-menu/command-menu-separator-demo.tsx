'use client'

import React from 'react'

import { Button, Command } from '@/components/ui'

export default function CommandSeparatorDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button variant='outline' onPress={() => setIsOpen(true)}>
                Open
            </Button>
            <Command isOpen={isOpen} onOpenChange={setIsOpen}>
                <Command.Input placeholder='Quick search...' />
                <Command.List>
                    <Command.Item asChild>
                        <a href='#'>Profile Overview</a>
                    </Command.Item>
                    <Command.Item asChild>
                        <a href='#'>Profile Settings</a>
                    </Command.Item>
                    <Command.Item asChild>
                        <a href='#'>Security Settings</a>
                    </Command.Item>
                    <Command.Separator />
                    <Command.Item asChild>
                        <a href='#'>Notification Preferences</a>
                    </Command.Item>
                    <Command.Item asChild>
                        <a href='#'>Privacy Settings</a>
                    </Command.Item>
                    <Command.Separator />
                    <Command.Item asChild>
                        <a href='#'>Billing Information</a>
                    </Command.Item>
                    <Command.Item asChild>
                        <a href='#'>Subscription Plans</a>
                    </Command.Item>
                    <Command.Separator />
                    <Command.Item asChild>
                        <a href='#'>Connected Apps</a>
                    </Command.Item>
                    <Command.Item asChild>
                        <a href='#'>Logout</a>
                    </Command.Item>
                </Command.List>
            </Command>
        </>
    )
}
