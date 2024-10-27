import { Link } from 'next-view-transitions'

import ThemeCustomizer from '@/components/controllers/themes/themes'
import { Hero, HeroDescription, HeroHeader, HeroTitle } from '@/components/layouts/hero'

export default async function Page() {
    return (
        <>
            <Hero>
                <HeroHeader>
                    <HeroTitle>THEMES</HeroTitle>
                    <HeroDescription>
                        You can always fully customize this UI design with your favor
                        <br />
                        head to <code className='font-semibold text-primary'>.css</code> file and
                        add your own styles
                    </HeroDescription>
                    <HeroDescription className='mt-4'>
                        Feel free to find an inspiration from{' '}
                        <Link className='text-primary' href='/colors'>
                            Colors Page
                        </Link>
                    </HeroDescription>
                </HeroHeader>
            </Hero>
            <ThemeCustomizer />
        </>
    )
}
