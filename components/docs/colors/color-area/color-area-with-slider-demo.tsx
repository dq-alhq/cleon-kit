'use client'

import React from 'react'

import { ColorArea, ColorField, ColorSlider } from '@/components/ui'
import { parseColor } from '@react-stately/color'

export default function ColorAreaWithSliderDemo() {
    const [color, setColor] = React.useState(parseColor('hsl(50, 100%, 50%)'))
    return (
        <div className='flex max-w-60 flex-col gap-y-2'>
            <ColorArea
                className='w-full shrink-0'
                value={color}
                onChange={setColor}
                xChannel='saturation'
                yChannel='lightness'
            />
            <ColorSlider
                label='Fill Color'
                className='orientation-horizontal:w-full'
                channel='hue'
                value={color}
                onChange={setColor}
            />

            <ColorField
                label='Current Color'
                enableColorPicker={false}
                value={color.toString('hex')}
            />
        </div>
    )
}
