'use client'

import * as React from 'react'

import { IconLoader2 } from 'cleon-icons'

import { previews } from '@/components/docs/generated/previews'
import jsonPreviews from '@/components/docs/generated/previews.json'
import { Tabs } from '@/components/ui'
import { cn } from '@/lib/utils'

import { Code } from './code'

interface DemoProps extends React.HTMLAttributes<HTMLDivElement> {
    component: string
    className?: string
    center?: boolean
}

export function Demo({ component, className, center = false, ...props }: DemoProps) {
    const Preview = previews[component] ? previews[component].component : null
    // @ts-ignore
    const codeString = jsonPreviews[component].raw ?? ''
    return (
        <div className='relative my-4' {...props}>
            <Tabs aria-label='Component'>
                <Tabs.List>
                    <Tabs.Label id='preview'>Preview</Tabs.Label>
                    <Tabs.Label id='code'>Code</Tabs.Label>
                </Tabs.List>
                <Tabs.Content className='w-full' id='preview'>
                    <div
                        className={cn(
                            'relative gap-4 w-full rounded-lg border border-dashed bg-background p-6',
                            center &&
                                'preview flex min-h-20 items-center justify-center py-6 sm:py-12'
                        )}
                    >
                        <React.Suspense
                            fallback={
                                <div className='flex w-full justify-center items-center text-sm text-muted-foreground'>
                                    <IconLoader2 className='size-12 animate-spin' />
                                </div>
                            }
                        >
                            <div className={cn('not-prose', className)}>
                                <Preview />
                            </div>
                        </React.Suspense>
                    </div>
                </Tabs.Content>
                <Tabs.Content className='not-prose' id='code'>
                    <Code code={codeString} />
                </Tabs.Content>
            </Tabs>
        </div>
    )
}
