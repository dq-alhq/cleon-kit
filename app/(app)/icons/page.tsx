import { IconBrandFigma, IconBrandGithub } from 'cleon-icons'

import ListIcons from '@/components/controllers/icons/list-icons'
import SearchIcon from '@/components/controllers/icons/search-icon'
import SelectColor from '@/components/controllers/icons/select-color'
import SelectSize from '@/components/controllers/icons/select-size'
import SelectStroke from '@/components/controllers/icons/select-stroke'
import {
    Hero,
    HeroButton,
    HeroContent,
    HeroDescription,
    HeroHeader,
    HeroTitle
} from '@/components/layouts/hero'
import { CLI } from '@/components/mdx/installation'
import { Container, Link } from '@/components/ui'

type SearchParams = Promise<{ [key: string]: string }>

export default async function IconsPage(props: { searchParams: SearchParams }) {
    const searchParams = await props.searchParams
    const size = searchParams.s || '5'
    const stroke = searchParams.stroke || '2'
    const query = searchParams.q || ''
    const color = searchParams.c || '#52525b'
    const category = searchParams.category || 'all'
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
            <div className='rounded-b-lg w-full bg-background/60 backdrop-blur-xl sticky top-12 py-6 lg:top-14 z-10'>
                <Container className='flex flex-col-reverse sm:flex-row gap-3 justify-between items-center '>
                    <SearchIcon />
                    <div className='flex gap-2 items-center w-full sm:w-auto'>
                        <SelectColor />
                        <SelectStroke />
                        <SelectSize />
                    </div>
                </Container>
            </div>
            <Container className='py-4 flex w-full flex-col lg:flex-row gap-8 items-start'>
                <ListIcons
                    category={category}
                    color={color}
                    size={size}
                    stroke={stroke}
                    query={query}
                />
            </Container>
        </>
    )
}
