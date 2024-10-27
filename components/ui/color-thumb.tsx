'use client'

import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

const thumbStyles = tv({
    base: 'size-6 top-[50%] left-[50%] rounded-full border-2 border-white [box-shadow:0_0_0_1px_black,_inset_0_0_0_1px_black]',
    variants: {
        isFocusVisible: {
            true: 'size-8'
        },
        isDragging: {
            true: 'bg-gray-700 dark:bg-gray-300'
        },
        isDisabled: {
            true: 'opacity-50'
        }
    }
})

const ColorThumb = (props: Aria.ColorThumbProps) => {
    return (
        <Aria.ColorThumb
            {...props}
            style={({ defaultStyle, isDisabled }) => ({
                ...defaultStyle,
                backgroundColor: isDisabled ? undefined : defaultStyle.backgroundColor
            })}
            className={thumbStyles}
        />
    )
}

export { ColorThumb }
