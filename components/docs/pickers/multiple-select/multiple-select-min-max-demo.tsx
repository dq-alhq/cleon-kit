'use client'

import { useListData } from 'react-stately'

import { MultiSelect, type SelectedKey } from '@/components/ui'

const tags = [
    { id: 1, textValue: 'Cooking' },
    { id: 2, textValue: 'Gardening' },
    { id: 3, textValue: 'Meditation' },
    { id: 4, textValue: 'Parenting' },
    { id: 5, textValue: 'DIY Projects' },
    { id: 6, textValue: 'Mindfulness' },
    { id: 7, textValue: 'Travel Tips' },
    { id: 8, textValue: 'Pet Care' },
    { id: 9, textValue: 'Home Decor' },
    { id: 10, textValue: 'Sustainable Living' }
]

export default function MultiSelectMinMaxDemo() {
    const selectedItems = useListData<SelectedKey>({
        initialItems: [tags[0]]
    })
    return (
        <MultiSelect
            className='max-w-xs'
            label='Select tags'
            description='You can select up to 4 tags'
            max={4}
            selectedList={selectedItems}
            items={tags}
            tag={(item) => (
                <MultiSelect.Tag textValue={item.textValue}>{item.textValue}</MultiSelect.Tag>
            )}
        >
            {(item) => {
                return (
                    <MultiSelect.Item textValue={item.textValue}>{item.textValue}</MultiSelect.Item>
                )
            }}
        </MultiSelect>
    )
}
