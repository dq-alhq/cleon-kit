import type { Metadata } from 'next'

import { Heading } from '@/components/ui'

export const metadata: Metadata = {
    title: 'Sidebar Inset'
}
export default function Page() {
    return <Heading>Settings</Heading>
}
