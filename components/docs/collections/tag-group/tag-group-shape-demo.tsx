'use client'

import { Tag } from '@/components/ui'

const carModels = [
    { id: '1', name: 'Tesla Model S', available: true },
    { id: '2', name: 'Ford Mustang', available: false },
    { id: '3', name: 'Chevrolet Camaro', available: true },
    { id: '4', name: 'BMW M3', available: false },
    { id: '5', name: 'Audi R8', available: true }
]

export default function TagGroupShapeDemo() {
    return (
        <div className='space-y-6 max-w-sm'>
            <Tag.Group shape='square' variant='danger' label='Car Models' selectionMode='multiple'>
                <Tag.List items={carModels}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
            </Tag.Group>
            <Tag.Group shape='circle' variant='warning' label='Car Models' selectionMode='multiple'>
                <Tag.List items={carModels}>{(item) => <Tag.Item>{item.name}</Tag.Item>}</Tag.List>
            </Tag.Group>
        </div>
    )
}
