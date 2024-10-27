'use client'

import { IconMenu } from 'cleon-icons'
import { Collection } from 'react-aria-components'

import { Select, Tabs } from '@/components/ui'
import { useMediaQuery } from '@/lib/utils'

const tabs = [
    { id: 1, title: 'Overview', content: 'This is the overview tab content.' },
    { id: 2, title: 'Features', content: 'Details about the features are listed here.' },
    { id: 3, title: 'Pricing', content: 'Find the pricing information on this tab.' },
    { id: 4, title: 'Reviews', content: 'Read user reviews and ratings here.' },
    { id: 5, title: 'Support', content: 'Contact our support team on this tab.' },
    { id: 6, title: 'Guarantee', content: 'Our satisfaction guarantee details are here.' },
    { id: 7, title: 'FAQ', content: 'Frequently asked questions are answered here.' }
]

export default function TabsResponsiveDemo() {
    const isMobile = useMediaQuery('(max-width: 600px)')
    return isMobile ? (
        <Select className='sm:hidden flex' prefix={<IconMenu />} items={tabs}>
            {(item) => <Select.Item textValue={item.title}>{item.title}</Select.Item>}
        </Select>
    ) : (
        <Tabs className='sm:flex hidden' aria-label='Project Management'>
            <Tabs.List aria-label='Dynamic tabs' items={tabs}>
                {(item) => <Tabs.Label>{item.title}</Tabs.Label>}
            </Tabs.List>
            <Collection items={tabs}>
                {(item) => <Tabs.Content key={item.id}>{item.content}</Tabs.Content>}
            </Collection>
        </Tabs>
    )
}
