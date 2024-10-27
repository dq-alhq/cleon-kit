import ColorCustomizer from '@/components/controllers/colors/color-customizer'
import { Hero, HeroDescription, HeroHeader, HeroTitle } from '@/components/layouts/hero'

export default function Page() {
    return (
        <>
            <Hero>
                <HeroHeader>
                    <HeroTitle>COLORS</HeroTitle>
                    <HeroDescription>
                        Let's generate color palette based on your favor.
                    </HeroDescription>
                    <HeroDescription className='mt-4 text-warning'>
                        This project still in experimental state
                    </HeroDescription>
                </HeroHeader>
            </Hero>
            <ColorCustomizer />
        </>
    )
}
