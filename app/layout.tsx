import React from 'react'

import type { Metadata, Viewport } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import localFont from 'next/font/local'

import { Providers } from '@/components/providers'
import '@/lib/styles/app.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://cleon-ui.vercel.app'),
    title: {
        default: 'Cleon UI',
        template: `%s | Cleon UI`
    },
    description: 'Customizable React UI Components Library',
    alternates: {
        canonical: './'
    },
    keywords: [
        'React',
        'Next.js',
        'Inertia.js',
        'Tailwind CSS',
        'UI Components',
        'UI Kit',
        'UI Library',
        'UI Framework',
        'Cleon UI',
        'React Aria',
        'React Aria Components',
        'Server Components',
        'React Components',
        'Next UI Components',
        'UI Design System',
        'UI for Laravel Inertia',
        'Laravel Inertia UI',
        'Laravel Inertia Components',
        'Laravel Inertia UI Components',
        'Laravel Inertia UI Kit',
        'Laravel Inertia UI Library',
        'Laravel Inertia UI Framework',
        'Laravel Inertia Cleon UI',
        'Laravel Cleon UI',
        'Cleon UI Components',
        'Cleon UI UI Components',
        'Cleon UI UI Kit',
        'Cleon UI UI Library',
        'Cleon UI UI Framework',
        'Cleon UI Laravel Inertia',
        'Cleon UI Laravel',
        'Cleon UI Inertia'
    ],
    // manifest: '/manifest.json',
    authors: [
        {
            name: 'dq-alhq',
            url: 'https://x.com/dqalhq'
        }
    ],
    creator: 'dq-alhq'
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    viewportFit: 'cover',
    width: 'device-width',
    initialScale: 1
}

const fontSans = localFont({
    src: [{ path: './fonts/GeistVF.woff' }],
    variable: '--font-sans'
})

const fontMono = localFont({
    src: [{ path: './fonts/GeistMonoVF.woff' }],
    variable: '--font-mono'
})

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html dir='ltr' lang='en' suppressHydrationWarning>
            <ViewTransitions>
                <body
                    className={`${fontSans.variable} ${fontMono.variable} antialiased min-h-screen font-sans`}
                >
                    <Providers>
                        {children}
                        {process.env.NODE_ENV === 'production' && <Analytics />}
                    </Providers>
                </body>
            </ViewTransitions>
        </html>
    )
}
