import React from 'react'

import type { Metadata, Viewport } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import localFont from 'next/font/local'

import { Providers } from '@/components/providers'
import '@/lib/styles/app.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://cleon-kit.vercel.app'),
    title: {
        default: 'Cleon Kit',
        template: `%s | Cleon Kit`
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
        'Cleon Kit',
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
        'Laravel Inertia Cleon Kit',
        'Laravel Cleon Kit',
        'Cleon Kit Components',
        'Cleon Kit UI Components',
        'Cleon Kit UI Kit',
        'Cleon Kit UI Library',
        'Cleon Kit UI Framework',
        'Cleon Kit Laravel Inertia',
        'Cleon Kit Laravel',
        'Cleon Kit Inertia'
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
        <ViewTransitions>
            <html dir='ltr' lang='en' suppressHydrationWarning>
                <body
                    className={`${fontSans.variable} ${fontMono.variable} antialiased min-h-screen font-sans`}
                >
                    <Providers>
                        {children}
                        {process.env.NODE_ENV === 'production' && <Analytics />}
                    </Providers>
                </body>
            </html>
        </ViewTransitions>
    )
}
