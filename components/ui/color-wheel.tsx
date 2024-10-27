'use client'

import * as Aria from 'react-aria-components'

import { ColorThumb } from './color-thumb'

export type ColorWheelProps = Omit<Aria.ColorWheelProps, 'outerRadius' | 'innerRadius'>

const ColorWheel = (props: ColorWheelProps) => {
    return (
        <Aria.ColorWheel {...props} outerRadius={100} innerRadius={74}>
            <Aria.ColorWheelTrack
                className='disabled:bg-muted/75'
                style={({ defaultStyle, isDisabled }) => ({
                    ...defaultStyle,
                    background: isDisabled
                        ? undefined
                        : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
                })}
            />
            <ColorThumb />
        </Aria.ColorWheel>
    )
}

export { ColorWheel }
