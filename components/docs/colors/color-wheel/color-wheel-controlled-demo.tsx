'use client'

import React from 'react'

import { ControlledValues } from '@/components/docs/colors/controlled-values'
import { ColorWheel } from '@/components/ui'
import { parseColor } from '@react-stately/color'

export default function ColorWheelControlledDemo() {
    const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))
    return (
        <div className='grid gap-4 justify-center items-center sm:grid-cols-2'>
            <div className='shrink-0 grid place-content-center'>
                <ColorWheel aria-label='Background color' value={color} onChange={setColor} />
            </div>
            <ControlledValues color={color} />
        </div>
    )
}
