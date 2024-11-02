import React from 'react'

import { IconLoaderCircle } from 'cleon-icons'
import type { Metadata } from 'next'
import { deslugify, titleCase } from 'usemods'

import { previews } from '@/components/docs/generated/previews'

type Params = Promise<{ slug: string[] }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params
    return {
        title: titleCase(deslugify(slug.join(' | ')))
    }
}

export default async function BlocksPage({ params }: { params: Params }) {
    const { slug } = await params
    const component = `blocks/${slug.join('/')}`
    const Block = previews[component] ? previews[component].component : null

    return (
        <React.Suspense
            fallback={
                <div className='flex w-full justify-center min-h-svh items-center text-sm text-muted-foreground'>
                    <IconLoaderCircle className='size-12 animate-spin' />
                </div>
            }
        >
            <Block />
        </React.Suspense>
    )
}
