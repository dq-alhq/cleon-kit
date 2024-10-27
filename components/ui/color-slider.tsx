'use client'

import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { ColorThumb } from './color-thumb'
import { Label } from './field'

const trackStyles = tv({
    base: 'group col-span-2 orientation-horizontal:h-6 rounded-lg',
    variants: {
        orientation: {
            horizontal: 'w-full h-6',
            vertical: 'w-6 h-56 mx-auto'
        },
        isDisabled: {
            true: 'opacity-75 bg-muted'
        }
    }
})

interface ColorSliderProps extends Aria.ColorSliderProps {
    label?: string
    showOutput?: boolean
}

const ColorSlider = ({ showOutput = true, label, className, ...props }: ColorSliderProps) => {
    return (
        <Aria.ColorSlider
            {...props}
            data-slot='color-slider'
            className={cn(
                'group orientation-horizontal:grid orientation-vertical:flex relative orientation-horizontal:grid-cols-[1fr_auto] orientation-vertical:flex-col orientation-vertical:justify-center orientation-vertical:items-center gap-2 orientation-horizontal:w-56',
                className
            )}
        >
            <div className='flex items-center gap-x-1'>
                {label && <Label className='text-sm [grid-area:label]'>{label}</Label>}
                {showOutput && <Aria.SliderOutput className='text-sm ml-auto [grid-area:output]' />}
            </div>
            <Aria.SliderTrack
                className={trackStyles}
                style={({ defaultStyle, isDisabled }) => ({
                    ...defaultStyle,
                    background: isDisabled
                        ? undefined
                        : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
                })}
            >
                <ColorThumb />
            </Aria.SliderTrack>
        </Aria.ColorSlider>
    )
}

export { ColorSlider }
