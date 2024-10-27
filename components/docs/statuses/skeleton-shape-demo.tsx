'use client'

import { Card, Skeleton } from '@/components/ui'

export default function SkeletonShapeDemo() {
    return (
        <Card className='p-4'>
            <div className='flex gap-2'>
                <Skeleton variant='lighter' shape='circle' className='size-8' />
                <div className='space-y-1'>
                    <Skeleton variant='muted' shape='circle' className='h-4 w-56' />
                    <Skeleton variant='muted' shape='circle' className='h-4 w-10' />
                </div>
            </div>
        </Card>
    )
}
