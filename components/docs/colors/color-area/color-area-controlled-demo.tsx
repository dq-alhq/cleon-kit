'use client'

import React from 'react'

import { ControlledValues } from '@/components/docs/colors/controlled-values'
import { ColorArea, ColorThumb } from '@/components/ui'
import { parseColor } from '@react-stately/color'

export default function ColorAreaControlledDemo() {
    const [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'))

    return (
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
            <ColorArea value={value} onChange={setValue}>
                <ColorThumb />
            </ColorArea>
            <ControlledValues color={value} />
        </div>
    )
}
