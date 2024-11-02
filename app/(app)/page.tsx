import { IconBrandCleon } from 'cleon-icons'

import {
    Hero,
    HeroButton,
    HeroContent,
    HeroDescription,
    HeroHeader,
    HeroTitle
} from '@/components/layouts/hero'
import { CLI } from '@/components/mdx/cli'
import { Container } from '@/components/ui'

import DataFormSink from './sink/data-form'
import LoginFormSink from './sink/login-form'
import OptionsSink from './sink/options'
import TableSink from './sink/table-sink'
import UserProfileSink from './sink/user-profile'

export default async function Page() {
    return (
        <>
            <Hero>
                <HeroHeader>
                    <HeroTitle>CLEON KIT</HeroTitle>
                    <HeroDescription>
                        This UI Design is basically built on top of{' '}
                        <strong className='text-foreground'>React Aria Components</strong>, all
                        about keeping the web accessible. Easy to customize and just copy & paste
                        into your React projects.
                    </HeroDescription>
                </HeroHeader>
                <HeroContent>
                    <CLI noMessage command='init' className='min-w-60' />
                    <HeroButton href='/docs/getting-started/installation'>
                        <IconBrandCleon />
                        Components
                    </HeroButton>
                </HeroContent>
            </Hero>
            <Container className='grid my-6 grid-cols-1 lg:grid-cols-3 gap-4 w-full'>
                <LoginFormSink />
                <DataFormSink />
                <UserProfileSink />
                <div className='lg:col-span-2'>
                    <TableSink />
                </div>
                <div className='lg:col-span-1'>
                    <OptionsSink />
                </div>
            </Container>
        </>
    )
}
