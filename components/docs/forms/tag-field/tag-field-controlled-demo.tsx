'use client'

import { useListData } from 'react-stately'

import { Description, TagField } from '@/components/ui'

export default function TagFieldControlledDemo() {
    const selectedItems = useListData({
        initialItems: [{ id: 1, name: 'Ferrari' }]
    })

    return (
        <div className='max-w-xs'>
            <TagField
                variant='primary'
                label='Add tag'
                onItemInserted={(key) => console.log('on item inserted', key)}
                onItemCleared={(key) => console.log('on item cleared', key)}
                description='You can add multiple tags'
                list={selectedItems}
            />
            <Description className='max-w-xs block [&>strong]:text-foreground [&>strong]:text-medium mt-4'>
                {JSON.stringify(selectedItems.items)}
            </Description>
        </div>
    )
}
