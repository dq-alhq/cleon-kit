'use client'

import { buttonVariants, Link } from '@/components/ui'

export default function ButtonLinkDemo() {
    return (
        <Link variant='unstyled' className={buttonVariants({ variant: 'success' })} href='#'>
            Choicebox
        </Link>
    )
}
