'use client'

import * as React from 'react'

import { ListBox } from 'react-aria-components'

import type { ColorFormat } from '@react-types/color'

import { ColorItem } from './color-item'

export interface ColorProps {
    name: string
    children: {
        shade: string
        color: string
    }[]
}
export interface ColorRowProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    item: ColorProps
    children?: React.ReactNode
    selectedFormat?: ColorFormat
    tailwindVariable: boolean
}

export function ColorShades({ item, selectedFormat, tailwindVariable }: ColorRowProps) {
    return (
        <div className='p-2 bg-background border rounded-lg overflow-hidden'>
            <div className='flex mb-2 items-center justify-center'>
                <h3 className='tracking-tight text-muted-foreground font-mono text-sm font-medium sm:text-sm'>
                    {item.name}
                </h3>
            </div>

            <ListBox
                layout='grid'
                orientation='horizontal'
                className='grid grid-cols-7 lg:grid-cols-11 gap-x-1 gap-y-2 sm:gap-y-1'
                aria-label={`${item.name} 50-950 colors`}
                items={item.children}
            >
                {item.children.map((color, i) => (
                    <ColorItem
                        tailwindVariable={tailwindVariable}
                        key={i}
                        {...{
                            selectedFormat: selectedFormat ?? 'hsl',
                            item: color,
                            name: item.name
                        }}
                    />
                ))}
            </ListBox>
        </div>
    )
}
