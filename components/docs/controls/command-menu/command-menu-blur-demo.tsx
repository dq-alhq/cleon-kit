'use client'

import React from 'react'

import { IconBox, IconDollar, IconHome, IconNotebook, IconSettings, IconShield } from 'cleon-icons'
import Link from 'next/link'

// Replace with your router link component
import { Avatar, Button, Command } from '@/components/ui'

export default function CommandBlurDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button variant='outline' onPress={() => setIsOpen(true)}>
                Open
            </Button>
            <Command isBlurred isOpen={isOpen} onOpenChange={setIsOpen}>
                <Command.Input placeholder='Quick search...' />
                <Command.List>
                    <Command.Section separator heading='Pages'>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconHome /> Home
                            </Link>
                        </Command.Item>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconNotebook /> Docs
                                <Command.Keyboard keys='⌘k' />
                            </Link>
                        </Command.Item>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconBox /> Components
                            </Link>
                        </Command.Item>
                    </Command.Section>
                    <Command.Section separator heading='Dashboard'>
                        <Command.Item asChild>
                            <Link href='#'>
                                <IconDollar /> Billing
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
                    <Command.Section heading='Team'>
                        {users.map((user) => (
                            <Command.Item key={user.id}>
                                <Avatar src={user.image_url} />
                                {user.name}
                            </Command.Item>
                        ))}
                    </Command.Section>
                </Command.List>
            </Command>
        </>
    )
}

const users = [
    { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Rosemarie Koch', image_url: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Mrs. Reva Heaney Jr.', image_url: 'https://i.pravatar.cc/150?img=3' },
    { id: 5, name: 'Bria Ziemann', image_url: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'Heloise Borer Sr.', image_url: 'https://i.pravatar.cc/150?img=6' }
]
