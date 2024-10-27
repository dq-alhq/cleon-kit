'use client'

import React from 'react'

import { Button, Command } from '@/components/ui'

export default function CommandSectionDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button variant='outline' onPress={() => setIsOpen(true)}>
                Open
            </Button>
            <Command isOpen={isOpen} onOpenChange={setIsOpen}>
                <Command.Input placeholder='Quick search...' />
                <Command.List>
                    <Command.Section heading='Pages'>
                        <Command.Item asChild>
                            <a href='/public'>Home</a>
                        </Command.Item>
                        <Command.Item asChild>
                            <a href='/components'>Components</a>
                        </Command.Item>
                    </Command.Section>
                    <Command.Separator />
                    <Command.Section heading='Users'>
                        {users.map((user) => (
                            <Command.Item key={user.id}>{user.name}</Command.Item>
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
    { id: 4, name: 'Ms. Ettie Abshire DVM', image_url: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Bria Ziemann', image_url: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'Heloise Borer Sr.', image_url: 'https://i.pravatar.cc/150?img=6' },
    {
        id: 7,
        name: 'Miss Jacinthe Gerlach DVM',
        image_url: 'https://i.pravatar.cc/150?img=7'
    },
    {
        id: 8,
        name: 'Miss Stephania Schaefer Sr.',
        image_url: 'https://i.pravatar.cc/150?img=8'
    },
    { id: 9, name: 'Kevon Hackett MD', image_url: 'https://i.pravatar.cc/150?img=9' },
    { id: 10, name: 'Tom Ledner', image_url: 'https://i.pravatar.cc/150?img=10' }
]
