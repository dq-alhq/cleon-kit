'use client'

import React from 'react'

import * as Aria from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

export const tooltipStyles = tv({
    base: [
        'group rounded-lg [&_strong]:font-medium border text-background px-3 py-1.5 text-sm will-change-transform dark:shadow-none',
        'placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1'
    ],
    variants: {
        variant: {
            default:
                'bg-background text-foreground [&_.tooltip]:fill-background [&_.tooltip]:stroke-muted',
            inverse:
                'border-transparent bg-foreground text-background [&_.tooltip]:fill-foreground [&_.tooltip]:stroke-transparent'
        },
        isEntering: {
            true: 'animate-in fade-in'
        },
        isExiting: {
            true: 'animate-in fade-in direction-reverse'
        }
    }
})

const Tooltip = (props: React.ComponentProps<typeof Aria.TooltipTrigger>) => (
    <Aria.TooltipTrigger {...props}>{props.children}</Aria.TooltipTrigger>
)

interface ContentProps
    extends Omit<Aria.TooltipProps, 'children'>,
        VariantProps<typeof tooltipStyles> {
    showArrow?: boolean
    children: React.ReactNode
}

const Content = ({ showArrow = true, variant = 'default', children, ...props }: ContentProps) => {
    return (
        <Aria.Tooltip
            {...props}
            offset={10}
            className={Aria.composeRenderProps(props.className, (className, renderProps) =>
                tooltipStyles({
                    ...renderProps,
                    variant,
                    className
                })
            )}
        >
            {showArrow && (
                <Aria.OverlayArrow>
                    <svg
                        width={12}
                        height={12}
                        viewBox='0 0 12 12'
                        className='tooltip group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180'
                    >
                        <path d='M0 0 L6 6 L12 0' />
                    </svg>
                </Aria.OverlayArrow>
            )}
            {children}
        </Aria.Tooltip>
    )
}

Tooltip.Trigger = Aria.Button
Tooltip.Content = Content

export { Tooltip }
