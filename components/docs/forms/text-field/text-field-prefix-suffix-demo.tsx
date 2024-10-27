'use client'

import { IconBrandX } from 'cleon-icons'

import { TextField } from '@/components/ui'

export default function TextFieldPrefixSuffixDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <TextField label='Twitter' suffix={<IconBrandX />} />
            <TextField label='Sites' prefix='https://' suffix='.com' />
        </div>
    )
}
