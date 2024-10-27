import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { MDXContent } from '@/components/mdx'
import { DocRefs } from '@/components/mdx/references'
import { TableOfContents } from '@/components/mdx/toc'
import { Separator } from '@/components/ui'
import '@/lib/styles/code.css'
import { docs } from '@docs'

type Params = Promise<{ slug: string[] }>

async function getPostFromParams(slug: string[]) {
    const doc = docs.find((doc) => doc.slugAsParams === slug.join('/'))
    return doc
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params
    const doc = await getPostFromParams(slug)

    if (!doc) {
        return {}
    }

    const ogSearchParams = new URLSearchParams()
    ogSearchParams.set('title', doc.title)

    return {
        title: `${doc.title}`,
        description: doc.description,
        openGraph: {
            title: doc.title,
            description: doc.description,
            type: 'article',
            url: doc.slug,
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: doc.title
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: doc.title,
            description: doc.description,
            images: [`/api/og?${ogSearchParams.toString()}`]
        }
    }
}

export async function generateStaticParams() {
    return docs.map((doc) => ({ slug: doc.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: { params: Params }) {
    const { slug } = await params
    const doc = await getPostFromParams(slug)

    if (!doc || !doc.published) {
        notFound()
    }

    return (
        <>
            <div className='min-w-0 max-w-2xl flex-auto px-4 pb-56 pt-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>
                <main className='prose prose-blue max-w-[inherit] dark:prose-invert prose-headings:mb-[0.3rem] prose-headings:scroll-mt-24 prose-code:text-primary prose-pre:p-0'>
                    <h1 className='mb-2'>{doc.title}</h1>
                    {doc.description ? (
                        <p className='mt-0 text-xl text-foreground/70'>{doc.description}</p>
                    ) : null}

                    <div className='not-prose'>
                        <div className='mt-0 flex gap-2'>
                            {doc.references && doc.references?.length > 0 && (
                                <DocRefs references={doc.references} />
                            )}
                        </div>
                        <Separator className='not-prose my-4 lg:my-10' />
                    </div>
                    <TableOfContents className='mt-8 block xl:hidden' items={doc.toc} />
                    <MDXContent code={doc.body} />
                </main>
            </div>
            <TableOfContents className='hidden xl:block' items={doc.toc} />
        </>
    )
}
