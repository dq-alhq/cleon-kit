'use client'

import React from 'react'

import { Button, Command } from '@/components/ui'

export default function CommandDisabledDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button variant='outline' onPress={() => setIsOpen(true)}>
                Open
            </Button>
            <Command isOpen={isOpen} onOpenChange={setIsOpen}>
                <Command.Input placeholder='Quick search...' />
                <Command.List>
                    <Command.Section heading='Suggestions'>
                        <Command.Item>
                            PhpStorm
                            <Command.Description>Application</Command.Description>
                        </Command.Item>
                        <Command.Item>
                            WebStorm
                            <Command.Description>Application</Command.Description>
                        </Command.Item>
                        <Command.Item disabled>
                            Warp
                            <Command.Description>Need to enable</Command.Description>
                        </Command.Item>
                        <Command.Item disabled>
                            Sublime Text
                            <Command.Description>Need to enable</Command.Description>
                        </Command.Item>
                        <Command.Item>
                            VS Code
                            <Command.Description>Application</Command.Description>
                        </Command.Item>
                        <Command.Item disabled>
                            Atom
                            <Command.Description>Killed</Command.Description>
                        </Command.Item>
                    </Command.Section>
                </Command.List>
            </Command>
        </>
    )
}
