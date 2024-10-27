'use client'

import { Avatar, ComboBox } from '@/components/ui'

export default function ComboBoxDisabledDemo() {
    return (
        <ComboBox placeholder='Select a user' label='Users' items={users} isDisabled>
            {(item) => (
                <ComboBox.Item key={item.id} id={item.id} textValue={item.name}>
                    <Avatar src={item.image_url} />
                    {item.name}
                </ComboBox.Item>
            )}
        </ComboBox>
    )
}

const users = [
    { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' }
    //...
]
