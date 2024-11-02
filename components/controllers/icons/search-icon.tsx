'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

import { SearchField } from '@/components/ui'

export function Search() {
    const searchParams = useSearchParams()

    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('q', term)
        } else {
            params.delete('q')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <SearchField
            className='w-full sm:max-w-sm'
            onChange={handleSearch}
            defaultValue={searchParams.get('q')?.toString()}
            aria-label='Search icons'
            placeholder='Search icons...'
        />
    )
}
