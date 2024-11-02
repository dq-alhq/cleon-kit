'use client'

import { IconSwatchBook } from 'cleon-icons'

import { ColorField } from '@/components/ui'

export default function ColorFieldWithPrefixDemo() {
    return <ColorField label='Color' prefix={<IconSwatchBook />} placeholder='#FAFAFA' />
}
