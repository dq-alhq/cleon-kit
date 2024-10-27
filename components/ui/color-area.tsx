'use client'

import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { ColorThumb } from './color-thumb'

type ColorAreaProps = Aria.ColorAreaProps

const ColorArea = ({ className, ...props }: ColorAreaProps) => {
    return (
        <Aria.ColorArea
            {...props}
            data-slot='color-area'
            className={cn('size-56 shrink-0 rounded-md bg-muted', className)}
            style={({ defaultStyle, isDisabled }) => ({
                ...defaultStyle,
                background: isDisabled ? undefined : defaultStyle.background
            })}
        >
            <ColorThumb />
        </Aria.ColorArea>
    )
}

export { ColorArea }
