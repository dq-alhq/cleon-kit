'use client'

import { Breadcrumbs } from '@/components/ui'

export default function BreadcrumbsDemo() {
    return (
        <Breadcrumbs onAction={() => {}}>
            <Breadcrumbs.Item href='#'>Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href='#'>Design System</Breadcrumbs.Item>
            <Breadcrumbs.Item>Collections</Breadcrumbs.Item>
        </Breadcrumbs>
    )
}
