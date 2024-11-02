import { Container } from '@/components/ui'

import { Search } from './search-icon'
import { SelectSize } from './select-size'
import { SelectStroke } from './select-stroke'

export function IconsController() {
    return (
        <>
            <div className='w-full rounded-b-lg bg-background/60 backdrop-blur-xl sticky top-12 lg:top-14 py-6 z-10'>
                <Container className='flex flex-col relative sm:flex-row items-center justify-between gap-2'>
                    <Search />
                    <div className='flex gap-2 w-full sm:w-auto items-center'>
                        <SelectStroke />
                        <SelectSize />
                    </div>
                </Container>
            </div>
        </>
    )
}
