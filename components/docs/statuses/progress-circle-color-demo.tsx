'use client'

import { ProgressCircle } from '@/components/ui'

export default function ProgressCircleColorDemo() {
    return (
        <div className='flex gap-2'>
            <ProgressCircle isIndeterminate className='text-danger' />
            <ProgressCircle isIndeterminate className='text-primary' />
            <ProgressCircle isIndeterminate className='text-warning' />
        </div>
    )
}
