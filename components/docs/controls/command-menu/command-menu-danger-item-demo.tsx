'use client'

import React from 'react'

import { Button, Command } from '@/components/ui'

export default function CommandDangerItemDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button variant='outline' onPress={() => setIsOpen(true)}>
                Open
            </Button>
            <Command isOpen={isOpen} onOpenChange={setIsOpen}>
                <Command.Input placeholder='Quick search...' />
                <Command.List>
                    <Command.Section>
                        <Command.Item>System Shutdown</Command.Item>
                        <Command.Item isDanger>Format Disk</Command.Item>
                        <Command.Item>Restart Service</Command.Item>
                        <Command.Item>Empty Trash</Command.Item>
                        <Command.Item>Overwrite File</Command.Item>
                        <Command.Item isDanger>Reset Factory Settings</Command.Item>
                        <Command.Item>Disconnect Network</Command.Item>
                    </Command.Section>
                </Command.List>
            </Command>
        </>
    )
}
