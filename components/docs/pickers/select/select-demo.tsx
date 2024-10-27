'use client'

import { Select } from '@/components/ui'

export const software = [
    { id: 1, name: 'Adobe Photoshop' },
    { id: 2, name: 'Sketch' },
    { id: 3, name: 'Figma' },
    { id: 4, name: 'Adobe XD' },
    { id: 5, name: 'InVision' }
]
export default function SelectDemo() {
    return (
        <Select label='Design software' placeholder='Select a software' items={software}>
            {(item) => (
                <Select.Item id={item.id} textValue={item.name}>
                    {item.name}
                </Select.Item>
            )}
        </Select>
    )
}
