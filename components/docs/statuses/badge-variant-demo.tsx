'use client'

import { Badge } from '@/components/ui'

export default function BadgeVariantDemo() {
    return (
        <div className='flex flex-wrap gap-2'>
            {[
                'primary',
                'secondary',
                'success',
                'info',
                'warning',
                'danger',
                'dark',
                'outline'
            ].map((variant, index) => (
                <Badge key={index} variant={variant as any}>
                    {variant}
                </Badge>
            ))}
        </div>
    )
}
