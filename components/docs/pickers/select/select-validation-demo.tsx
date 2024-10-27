'use client'

import { Button, Form, Select } from '@/components/ui'

const software = [
    { id: 1, name: 'Adobe Photoshop' }
    //...
]

export default function SelectValidationDemo() {
    return (
        <Form onSubmit={(e) => e.preventDefault()} className='space-y-2'>
            <Select
                label='Design software'
                placeholder='Select a software'
                items={software}
                isRequired
            >
                {(item) => (
                    <Select.Item id={item.id} textValue={item.name}>
                        {item.name}
                    </Select.Item>
                )}
            </Select>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
