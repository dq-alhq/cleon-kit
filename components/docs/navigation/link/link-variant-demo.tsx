'use client'

import { Link } from '@/components/ui'

export default function LinkVariantDemo() {
    return (
        <div className='flex gap-4'>
            <Link variant='default' href='#variant-3'>
                Default
            </Link>
            <Link variant='unstyled' href='#variant-5'>
                Unstyled
            </Link>
            <Link variant='primary' href='#variant-1'>
                Primary
            </Link>
            <Link variant='danger' href='#variant-4'>
                Danger
            </Link>
        </div>
    )
}
