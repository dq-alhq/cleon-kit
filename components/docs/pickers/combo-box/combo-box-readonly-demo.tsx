'use client'

import { Avatar, ComboBox } from '@/components/ui'

const users = [
    { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' }
    //...
]
export default function ComboBoxReadonlyDemo() {
    return (
        <ComboBox
            defaultSelectedKey={1}
            placeholder='Select a user'
            label='Users'
            items={users}
            isReadOnly
        >
            {(item) => (
                <ComboBox.Item key={item.id} id={item.id} textValue={item.name}>
                    <Avatar src={item.image_url} />
                    {item.name}
                </ComboBox.Item>
            )}
        </ComboBox>
    )
}
