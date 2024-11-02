import React from 'react'

import { IconBrandFigma, IconBrandGithub } from 'cleon-icons'

import { IconsController } from '@/components/controllers/icons'
import { IconComponent } from '@/components/controllers/icons/icon-component'
import Icons from '@/components/controllers/icons/icons.json'
import {
    Hero,
    HeroButton,
    HeroContent,
    HeroDescription,
    HeroHeader,
    HeroTitle
} from '@/components/layouts/hero'
import { CLI } from '@/components/mdx/cli'
import { Container, Link, Loader } from '@/components/ui'

export async function generateMetadata() {
    return {
        title: 'Icons'
    }
}

type SearchParams = Promise<{ [key: string]: string }>

export default async function IconsPage(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    const query = searchParams.q || ''
    const size = searchParams.s || '5'
    const stroke = searchParams.t || '2'

    const filteredIcons = Icons.filter(
        (i) =>
            i.name.toLowerCase().includes(query?.toLowerCase()) ||
            i.keywords.some((k) => k.includes(query?.toLowerCase()))
    )
    return (
        <>
            <Hero>
                <HeroHeader>
                    <HeroTitle>ICONS</HeroTitle>
                    <HeroDescription>
                        This UI Icon Library for Project, currently only for
                        <strong className='text-foreground'> React</strong>, most of these icons are
                        forked from{' '}
                        <Link
                            target='_blank'
                            className='text-foreground font-semibold hover:text-primary'
                            href='https://tabler.io/icons'
                        >
                            Tabler Icons
                        </Link>{' '}
                        and{' '}
                        <Link
                            target='_blank'
                            className='text-foreground font-semibold hover:text-primary'
                            href='https://lucide.dev/icons/'
                        >
                            Lucide Icons
                        </Link>
                        <br />
                        This Icon Libray used for{' '}
                        <Link target='_blank' href='/'>
                            CLEON UI
                        </Link>
                    </HeroDescription>
                    <HeroContent>
                        <CLI
                            command='install'
                            items={['cleon-icons']}
                            noMessage
                            className='min-w-60'
                        />
                        <HeroButton target='_blank' href='https://github.com/dq-alhq/cleon-icons'>
                            <IconBrandGithub className='size-5' />
                            Source
                        </HeroButton>
                        <HeroButton
                            variant='success'
                            target='_blank'
                            href='https://www.figma.com/design/LyFwmlkNXFWIkCUMvxTLQm/Cleon-UI-Icons?m=auto&t=9IvlYFDBF75mOpKf-6'
                        >
                            <IconBrandFigma className='size-5 [&_*]:stroke-1' />
                            Figma
                        </HeroButton>
                    </HeroContent>
                </HeroHeader>
            </Hero>
            <IconsController />
            <Container className='py-4 flex w-full flex-col lg:flex-row gap-8 items-start'>
                <React.Suspense
                    fallback={
                        <div className='flex justify-center items-center min-h-96'>
                            <Loader size='xl' />
                        </div>
                    }
                >
                    <div className='flex items-center gap-2 flex-wrap justify-between'>
                        {filteredIcons.map((item: any, i: number) => (
                            <IconComponent
                                key={i}
                                size={size as '4' | '5' | '6' | '7'}
                                stroke={stroke as '1' | '2'}
                                name={item.name}
                            />
                        ))}
                    </div>
                </React.Suspense>
            </Container>
        </>
    )
}
