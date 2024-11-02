'use client'

import React from 'react'

import { IconChevronDown } from 'cleon-icons'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Selection } from 'react-aria-components'

import { Button, Menu } from '@/components/ui'
import { useQueryString } from '@/lib/hooks/use-query-string'

const sizes = [
    { id: '4', name: 'Size 4' },
    { id: '5', name: 'Size 5' },
    { id: '6', name: 'Size 6' },
    { id: '7', name: 'Size 7' }
]

export function SelectSize() {
    const router = useRouter()
    const pathname = usePathname()
    const { createQueryString } = useQueryString()

    const searchParams = useSearchParams()

    const [selectedSize, setSelectSize] = React.useState<Selection>(
        new Set([searchParams.get('s') || '5'])
    )
    const onSelectionChange = (size: Selection) => {
        router.push(pathname + '?' + createQueryString('s', [...size].join(',')), {
            scroll: false
        })
        setSelectSize(size)
    }

    return (
        <Menu aria-label='Select Icon Size'>
            <Button
                className='[&[data-pressed]_[data-slot=icon]]:rotate-180 bg-background [&_[data-slot=icon]]:transition-transform w-full sm:max-w-sm'
                variant='outline'
            >
                <span>Size {[...selectedSize].join(', ').replace('size-', '')}</span>
                <IconChevronDown />
            </Button>
            <Menu.Content
                selectionMode='single'
                selectedKeys={selectedSize}
                onSelectionChange={onSelectionChange}
                placement='bottom end'
                items={sizes}
            >
                {(item) => (
                    <Menu.Radio textValue={item.name}>
                        {item.name} /{' '}
                        {item.name === 'Size 4'
                            ? '20px'
                            : item.name === 'Size 5'
                              ? '24px'
                              : item.name === 'Size 6'
                                ? '28px'
                                : '32px'}
                    </Menu.Radio>
                )}
            </Menu.Content>
        </Menu>
    )
}
