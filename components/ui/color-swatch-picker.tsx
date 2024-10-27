'use client'

import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { ColorSwatch } from './color-swatch'

const ColorSwatchPicker = ({
    children,
    className,
    layout = 'grid',
    ...props
}: Aria.ColorSwatchPickerProps) => {
    return (
        <Aria.ColorSwatchPicker layout={layout} {...props} className={cn('flex gap-1', className)}>
            {children}
        </Aria.ColorSwatchPicker>
    )
}

const itemStyles = tv({
    base: 'relative rounded disabled:opacity-50 outline-none focus:outline-none',
    variants: {
        isFocused: { true: 'ring-4 ring-primary/20' },
        isInvalid: { true: 'ring-4 ring-danger/20' }
    }
})

const SwatchPickerItem = (props: Aria.ColorSwatchPickerItemProps) => {
    return (
        <Aria.ColorSwatchPickerItem {...props} className={itemStyles}>
            {({ isSelected }) => (
                <>
                    <ColorSwatch />
                    {isSelected && (
                        <div className='absolute top-0 left-0 w-full h-full ring-1 ring-muted/30 outline-none rounded-[calc(var(--radius)-3.9px)] ring-inset' />
                    )}
                </>
            )}
        </Aria.ColorSwatchPickerItem>
    )
}

ColorSwatchPicker.Item = SwatchPickerItem

export { ColorSwatchPicker }
