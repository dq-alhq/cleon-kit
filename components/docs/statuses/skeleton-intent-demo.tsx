'use client'

import { Card, Skeleton } from '@/components/ui'

export default function SkeletonIntentDemo() {
    return (
        <Card className='p-4'>
            <div className='flex gap-2'>
                <Skeleton variant='lighter' className='size-8' />
                <div className='space-y-1'>
                    <Skeleton variant='muted' className='h-3.5 w-20' />
                    <Skeleton variant='muted' className='h-3.5 w-48' />
                </div>
            </div>
        </Card>
    )
}
