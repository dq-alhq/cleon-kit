'use client'

import { Breadcrumbs } from '@/components/ui'

export default function BreadcrumbsCurrentDemo() {
    return (
        <Breadcrumbs>
            <Breadcrumbs.Item href='#'>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href='#'>Components</Breadcrumbs.Item>
            <Breadcrumbs.Item
                className={({ isCurrent }) => (isCurrent ? 'text-primary' : 'text-secondary')}
            >
                Navbar
            </Breadcrumbs.Item>
        </Breadcrumbs>
    )
}