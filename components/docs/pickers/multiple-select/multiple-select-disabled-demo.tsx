'use client'

import { useListData } from 'react-stately'

import { MultiSelect, type SelectedKey } from '@/components/ui'

export default function MultiSelectDisabledDemo() {
    const selectedItems = useListData<SelectedKey>({
        initialItems: []
    })
    return (
        <MultiSelect
            isDisabled
            className='max-w-xs'
            label='Fruits'
            selectedList={selectedItems}
            items={fruits}
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

const fruits: SelectedKey[] = [{ id: 1, textValue: 'Apple' }]
