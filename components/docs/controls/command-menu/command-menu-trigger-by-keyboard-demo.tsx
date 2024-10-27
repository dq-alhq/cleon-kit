'use client'

import React from 'react'

import {
    IconBox,
    IconCreditCard,
    IconHome2,
    IconNotes,
    IconSettings,
    IconShield
} from 'cleon-icons'
import Link from 'next/link'

import { Command } from '@/components/ui'

export default function CommandTriggerByKeyboardDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setIsOpen((open: boolean) => !open)
            }
        }

        document.addEventListener('keydown', down)

        return () => document.removeEventListener('keydown', down)
    }, [setIsOpen])
    return (
        <>
            ⌘ /
            <Command isOpen={isOpen} onOpenChange={setIsOpen}>
                <Command.Input placeholder='Quick search...' />
                <Command.List>
                    <Command.Section separator heading='Pages'>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconHome2 /> Home
                            </Link>
                        </Command.Item>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconNotes /> Docs
                                <Command.Keyboard keys='⌘k' />
                            </Link>
                        </Command.Item>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconBox /> Components
                            </Link>
                        </Command.Item>
                    </Command.Section>
                    <Command.Section heading='Dashboard'>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconCreditCard /> Billing
                            </Link>
                        </Command.Item>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconSettings /> Settings
                                <Command.Keyboard keys='⌘s' />
                            </Link>
                        </Command.Item>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconShield /> Security
                            </Link>
                        </Command.Item>
                    </Command.Section>
                </Command.List>
            </Command>
        </>
    )
}
