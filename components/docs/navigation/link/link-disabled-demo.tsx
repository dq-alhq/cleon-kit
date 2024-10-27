'use client'

import { Link } from '@/components/ui'

export default function LinkDisabledDemo() {
    return (
        <div className='flex gap-4'>
            <Link isDisabled variant='default' href='#variant-3'>
                Default
            </Link>
            <Link isDisabled variant='unstyled' href='#variant-5'>
                Unstyled
            </Link>
            <Link isDisabled variant='primary' href='#variant-1'>
                Primary
            </Link>
            <Link isDisabled variant='danger' href='#variant-4'>
                Danger
            </Link>
        </div>
    )
}
