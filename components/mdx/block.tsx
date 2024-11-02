'use client'

import * as React from 'react'

import { IconMonitor, IconSmartphone, IconTablet } from 'cleon-icons'

import jsonPreviews from '@/components/docs/generated/previews.json'
import { Tabs, Toggle } from '@/components/ui'
import { cn } from '@/lib/utils'

import { Code } from './code'
import PreviewContent from './preview-content'

type screenWidthType = 'max-w-none' | 'max-w-3xl' | 'max-w-sm'

interface HowProps extends React.HTMLAttributes<HTMLDivElement> {
    component: string
    className?: string
    zoomOut?: boolean
}

export function BlockContent({ component, zoomOut = true, className, ...props }: HowProps) {
    // @ts-ignore
    const [codeString, setCodeString] = React.useState<string>('')
    React.useEffect(() => {
        const preview = jsonPreviews[component as keyof typeof jsonPreviews]
        if (preview) {
            setCodeString(preview.raw)
        }
    }, [component])

    const [screenWidth, setScreenWidth] = React.useState<screenWidthType>('max-w-none')

    return (
        <div className={cn('not-prose group relative my-6', className)} {...props}>
            <Tabs aria-label='Blocks'>
                <Tabs.List>
                    <Tabs.Label id='preview'>Preview</Tabs.Label>
                    <Tabs.Label id='code'>Code</Tabs.Label>
                </Tabs.List>
                <Tabs.Content className='w-full' id='preview'>
                    <div
                        className={cn(
                            'relative bg-background',
                            'flex min-h-56 items-center justify-center lg:min-h-80'
                        )}
                    >
                        <div className='absolute hidden sm:-top-14 right-0 sm:flex gap-1 [&_.btn]:!size-8'>
                            <Toggle
                                variant='solid'
                                size='icon'
                                isSelected={screenWidth === 'max-w-sm'}
                                onChange={() => setScreenWidth('max-w-sm')}
                            >
                                <IconSmartphone />
                            </Toggle>
                            <Toggle
                                variant='solid'
                                size='icon'
                                isSelected={screenWidth === 'max-w-3xl'}
                                onChange={() => setScreenWidth('max-w-3xl')}
                            >
                                <IconTablet />
                            </Toggle>
                            <Toggle
                                variant='solid'
                                size='icon'
                                isSelected={screenWidth === 'max-w-none'}
                                onChange={() => setScreenWidth('max-w-none')}
                            >
                                <IconMonitor />
                            </Toggle>
                        </div>
                        <PreviewContent
                            zoomOut={zoomOut}
                            component={component}
                            className={screenWidth}
                        />
                    </div>
                </Tabs.Content>
                <Tabs.Content id='code'>
                    <Code code={codeString} />
                </Tabs.Content>
            </Tabs>
        </div>
    )
}
