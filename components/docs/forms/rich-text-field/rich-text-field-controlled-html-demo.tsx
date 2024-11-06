'use client'

import React from 'react'

import { RichTextField } from '@/components/ui'

export default function RichTextFieldControlledMarkdownDemo() {
    const [value, setValue] = React.useState('')
    return (
        <>
            <RichTextField
                returnType='html'
                value={value}
                onChange={setValue}
                label='Content'
                className='mb-2'
            />
            <p className='mt-2'>You have typed: {value ?? '-'}</p>
        </>
    )
}
