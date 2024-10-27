'use client'

import { useListData } from 'react-stately'

import { Tag } from '@/components/ui'

const shoes = [
    { id: '1', name: 'Nike', available: true },
    { id: '2', name: 'Adidas', available: false },
    { id: '3', name: 'Puma', available: true },
    { id: '4', name: 'Reebok', available: true }
]

export default function TagGroupVariantDemo() {
    const shoesList = useListData({
        initialItems: shoes
    })
    return (
        <div className='space-y-2 max-w-sm'>
            <Tag.Group
                variant='primary'
                aria-label='Primary Variant'
                selectionMode='multiple'
                onRemove={(keys) => shoesList.remove(...keys)}
            >
                <Tag.List items={shoesList.items}>
                    {(item) => <Tag.Item>{item.name}</Tag.Item>}
                </Tag.List>
            </Tag.Group>
            <Tag.Group
                variant='secondary'
                aria-label='Secondary Variant'
                selectionMode='multiple'
                onRemove={(keys) => shoesList.remove(...keys)}
            >
                <Tag.List items={shoesList.items}>
                    {(item) => <Tag.Item>{item.name}</Tag.Item>}
                </Tag.List>
            </Tag.Group>
            <Tag.Group
                variant='success'
                aria-label='Success Variant'
                selectionMode='multiple'
                onRemove={(keys) => shoesList.remove(...keys)}
            >
                <Tag.List items={shoesList.items}>
                    {(item) => <Tag.Item>{item.name}</Tag.Item>}
                </Tag.List>
            </Tag.Group>
            <Tag.Group
                variant='warning'
                aria-label='Warning Variant'
                selectionMode='multiple'
                onRemove={(keys) => shoesList.remove(...keys)}
            >
                <Tag.List items={shoesList.items}>
                    {(item) => <Tag.Item>{item.name}</Tag.Item>}
                </Tag.List>
            </Tag.Group>
            <Tag.Group
                variant='danger'
                aria-label='Danger Variant'
                selectionMode='multiple'
                onRemove={(keys) => shoesList.remove(...keys)}
            >
                <Tag.List items={shoesList.items}>
                    {(item) => <Tag.Item>{item.name}</Tag.Item>}
                </Tag.List>
            </Tag.Group>
        </div>
    )
}
