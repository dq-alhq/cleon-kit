import React from 'react'

import { Footer } from '@/components/layouts/footer'
import { Navbar } from '@/components/layouts/navbar'
import { Toaster } from '@/components/ui'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
