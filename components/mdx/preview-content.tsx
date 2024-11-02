import * as React from 'react'

import { IconLoaderCircle } from 'cleon-icons'

import { cn } from '@/lib/utils'

export default function PreviewContent({
    component,
    zoomOut,
    className
}: {
    component: string
    zoomOut: boolean
    className?: string
}) {
    return (
        <React.Suspense
            fallback={
                <div className='w-full min-h-[600px] flex items-center justify-center'>
                    <IconLoaderCircle className='size-20 bg-muted' />
                </div>
            }
        >
            <iframe
                className={cn('w-full border rounded-lg relative z-20', className)}
                height={720}
                style={{ zoom: zoomOut ? 0.6 : 1 }}
                allowFullScreen
                src={`/blocks/${component}`}
            />
        </React.Suspense>
    )
}
