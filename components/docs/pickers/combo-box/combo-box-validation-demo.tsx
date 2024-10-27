'use client'

import { Avatar, Button, ComboBox, Form } from '@/components/ui'

const users = [
    { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' }
    //...
]
export default function ComboBoxValidationDemo() {
    return (
        <Form onSubmit={(e) => e.preventDefault()} className='space-y-2'>
            <ComboBox placeholder='Select a user' label='Users' items={users} isRequired>
                {(item) => (
                    <ComboBox.Item key={item.id} id={item.id} textValue={item.name}>
                        <Avatar src={item.image_url} />
                        {item.name}
                    </ComboBox.Item>
                )}
            </ComboBox>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
