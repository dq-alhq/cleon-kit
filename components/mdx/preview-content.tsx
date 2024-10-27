import * as React from 'react'

import { IconLoader2 } from 'cleon-icons'

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
                    <IconLoader2 className='size-20 bg-muted' />
                </div>
            }
        >
            <iframe
                className={cn('w-full border rounded-lg relative z-20', className)}
                height={720}
                style={{ zoom: zoomOut ? 0.75 : 1 }}
                allowFullScreen
                src={`/blocks/${component}`}
            />
        </React.Suspense>
    )
}
