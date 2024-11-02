'use client'

import * as React from 'react'

import { Button } from 'react-aria-components'

import previews from '@/components/docs/generated/previews.json'
import { Description, Tabs } from '@/components/ui'
import { cn } from '@/lib/utils'

import { Code } from './code'

interface SourceCodeProps extends React.HTMLAttributes<HTMLDivElement> {
    component: string | string[]
    withMessage?: boolean
}

export const SourceCode = ({ component, withMessage = true, ...props }: SourceCodeProps) => {
    const [codeStrings, setCodeStrings] = React.useState<{ name: string; code: string }[]>([])
    const [isOpened, setIsOpened] = React.useState<boolean>(false)

    React.useEffect(() => {
        const componentArray = Array.isArray(component) ? component : [component]
        const updatedCodeStrings = componentArray.map((show) => {
            // @ts-ignore
            const componentData = previews[show]
            if (componentData) {
                return {
                    name: show,
                    code: componentData.raw.replace(
                        /export default function \w+\(\) \{/g,
                        'export default function App() {'
                    )
                }
            } else {
                console.error('Component not found:', show)
                return { name: show, code: '' }
            }
        })
        setCodeStrings(updatedCodeStrings)
        setIsOpened(false)
    }, [component])

    const open = () => setIsOpened(!isOpened)

    return (
        <section className={cn('not-prose space-y-2', withMessage ? 'my-4' : 'my-2')}>
            {withMessage && (
                <Description className='-mt-2 mb-4 prose text-base max-w-none'>
                    Copy the code below and paste it into your component folder.
                </Description>
            )}
            <Tabs onSelectionChange={() => setIsOpened(false)}>
                <Tabs.List items={codeStrings}>
                    {(item) => (
                        <Tabs.Label key={item.name} id={`tab-${item.name}`}>
                            {item.name.includes('demo') ? `main` : item.name}.tsx
                        </Tabs.Label>
                    )}
                </Tabs.List>
                {codeStrings.map((item) => (
                    <Tabs.Content key={item.name} id={`tab-${item.name}`}>
                        <div className={'relative overflow-hidden'} {...props}>
                            <div
                                className={cn(
                                    'my-0 overflow-hidden transition',
                                    !isOpened && 'h-32'
                                )}
                            >
                                <Code code={item.code} />
                            </div>
                            <div
                                className={cn(
                                    'absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-background',
                                    isOpened && 'hidden'
                                )}
                            ></div>
                            <Button
                                className='sticky bottom-4 left-1/2 right-1/2 outline-none focus:outline-none rounded-lg p-2 transition border -translate-x-1/2 bg-background hover:bg-background hover:ring-offset-4 hover:ring-4 pressed:bg-background'
                                onPress={open}
                            >
                                {isOpened ? 'Hide' : 'Reveal'}
                            </Button>
                        </div>
                    </Tabs.Content>
                ))}
            </Tabs>
        </section>
    )
}
