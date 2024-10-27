import React from 'react'

import { Footer } from '@/components/layouts/footer'
import { Navbar } from '@/components/layouts/navbar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
