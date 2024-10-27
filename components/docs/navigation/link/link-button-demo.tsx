'use client'

import { buttonVariants, Link } from '@/components/ui'

export default function LinkButtonDemo() {
    return (
        <div className='flex gap-2'>
            <Link className={buttonVariants()} href='#use-as-button'>
                Link
            </Link>
            <Link className={buttonVariants({ variant: 'outline' })} href='#use-as-button'>
                Link
            </Link>
            <Link
                className={buttonVariants({ variant: 'ghost', shape: 'circle' })}
                href='#use-as-button'
            >
                Link
            </Link>
        </div>
    )
}
