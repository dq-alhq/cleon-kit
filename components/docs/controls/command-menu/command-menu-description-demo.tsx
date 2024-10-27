'use client'

import React from 'react'

import { IconBox } from 'cleon-icons'

import { Button, Command } from '@/components/ui'

export default function CommandDescriptionDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button variant='outline' onPress={() => setIsOpen(true)}>
                Open
            </Button>
            <Command
                messageOnEmpty={false}
                hideCloseButton
                hideSearchIndicator
                isOpen={isOpen}
                onOpenChange={setIsOpen}
            >
                <Command.Input placeholder='Search for apps and commands...' />
                <Command.Empty className='grid place-content-center'>
                    <div className='text-center'>
                        <IconBox className='inline' />
                        <p className='mt-2'>No results found.</p>
                    </div>
                </Command.Empty>

                <Command.List>
                    <Command.Section separator heading='Suggestions'>
                        <Command.Item>
                            PhpStorm
                            <Command.Description>Application</Command.Description>
                        </Command.Item>
                        <Command.Item>
                            WebStorm
                            <Command.Description>Application</Command.Description>
                        </Command.Item>
                        <Command.Item>
                            Warp
                            <Command.Description>Application</Command.Description>
                        </Command.Item>
                    </Command.Section>

                    <Command.Section separator heading='Applications'>
                        <Command.Item>
                            Terminal
                            <Command.Description>Application</Command.Description>
                        </Command.Item>
                        <Command.Item>
                            Docker
                            <Command.Description>Application</Command.Description>
                        </Command.Item>
                    </Command.Section>

                    <Command.Section separator heading='Commands'>
                        <Command.Item>
                            git status
                            <Command.Description>Command</Command.Description>
                        </Command.Item>
                        <Command.Item>
                            bun add
                            <Command.Description>Command</Command.Description>
                        </Command.Item>
                        <Command.Item>
                            composer require
                            <Command.Description>Command</Command.Description>
                        </Command.Item>
                    </Command.Section>

                    <Command.Section heading='System Settings'>
                        <Command.Item>
                            Display Brightness
                            <Command.Description>System Settings</Command.Description>
                        </Command.Item>
                        <Command.Item>
                            Sound Output
                            <Command.Description>System Settings</Command.Description>
                        </Command.Item>
                    </Command.Section>
                </Command.List>
            </Command>
        </>
    )
}
