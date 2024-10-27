'use client'

import { Tabs } from '@/components/ui'

const navs = [
    { url: '/', label: 'Home' },
    { url: '/docs/getting-started/introduction', label: 'Docs' },
    { url: '/components', label: 'Components' },
    { url: 'https://cleon-kit.vercel.app/icons', label: 'Icons' }
]

export default function TabsLinkDemo() {
    return (
        <Tabs aria-label='Navbar'>
            <Tabs.List items={navs}>
                {(item) => (
                    <Tabs.Label id={item.label} href={item.url}>
                        {item.label}
                    </Tabs.Label>
                )}
            </Tabs.List>
        </Tabs>
    )
}
