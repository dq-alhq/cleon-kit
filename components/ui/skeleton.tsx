import React from 'react'

import { tv } from 'tailwind-variants'

const skeletonStyles = tv({
    base: 'animate-pulse shrink-0',
    variants: {
        variant: {
            muted: 'bg-muted-foreground',
            lighter: 'bg-muted'
        },
        shape: {
            circle: 'rounded-full',
            square: 'rounded-lg'
        }
    },
    defaultVariants: {
        variant: 'muted',
        shape: 'square'
    }
})

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'muted' | 'lighter'
    shape?: 'circle' | 'square'
}
const Skeleton = ({ shape, variant, className, ...props }: SkeletonProps) => {
    return <div className={skeletonStyles({ shape, variant, className })} {...props} />
}

export { Skeleton }
