'use client'

import React from 'react'

import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'
import type { Placement } from '@react-types/overlays'

import { ColorArea } from './color-area'
import { ColorField } from './color-field'
import { ColorSlider } from './color-slider'
import { ColorSwatch } from './color-swatch'
import { Description } from './field'
import { Popover } from './popover'

export interface ColorPickerProps extends Aria.ColorPickerProps {
    label?: string
    children?: React.ReactNode
    showArrow?: boolean
    isDisabled?: boolean
    placement?: Placement
    description?: string
    className?: string
}

const ColorPicker = ({
    showArrow = false,
    placement = 'bottom start',
    label,
    isDisabled,
    children,
    description,
    className,
    ...props
}: ColorPickerProps) => {
    return (
        <div className='flex gap-y-2 flex-col'>
            <Aria.ColorPicker {...props}>
                <Popover>
                    <Aria.Button
                        isDisabled={isDisabled}
                        className='flex cursor-pointer disabled:cursor-default disabled:opacity-50 items-center rounded text-sm outline outline-primary outline-offset-2 outline-0 focus-visible:outline-2'
                    >
                        <ColorSwatch className={cn('size-6', className)} />
                        {label && <span className='ml-2'>{label}</span>}
                    </Aria.Button>
                    <Popover.Content
                        className='overflow-y-auto [&_[data-slot=color-slider]]:w-full [&_[data-slot=color-area]]:w-full sm:[&_[data-slot=color-area]]:size-56 sm:max-w-56 sm:min-w-min px-0 pt-4 pb-3 sm:p-3'
                        showArrow={showArrow}
                        placement={placement}
                    >
                        <Aria.Dialog className='flex flex-col gap-2 focus:outline-none'>
                            {children || (
                                <>
                                    <ColorArea
                                        colorSpace='hsb'
                                        xChannel='saturation'
                                        yChannel='brightness'
                                    />
                                    <ColorSlider
                                        showOutput={false}
                                        colorSpace='hsb'
                                        channel='hue'
                                    />
                                    <ColorField aria-label='Hex' />
                                </>
                            )}
                        </Aria.Dialog>
                    </Popover.Content>
                </Popover>
            </Aria.ColorPicker>
            {description && <Description>{description}</Description>}
        </div>
    )
}

export { ColorPicker }
