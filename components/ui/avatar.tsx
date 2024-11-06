'use client'

import React from 'react'

import { Collection } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { Tooltip } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { type CollectionProps } from '@react-aria/collections'

import { VisuallyHidden } from './visually-hidden'

interface AvatarGroupProps<T extends AvatarProps> extends Omit<CollectionProps<T>, 'children'> {
    children?: React.ReactNode
    className?: string
}

const AvatarGroup = <T extends AvatarProps>({
    className,
    items,
    children,
    ...props
}: AvatarGroupProps<T>) => {
    return (
        <div
            className={cn(
                'flex items-center -space-x-2 justify-center [&_[data-slot=avatar]]:ring-2 [&_[data-slot=avatar]]:ring-background',
                'hover:[&_.loo2ppvkxrcah38e]:scale-110 hover:[&_.loo2ppvkxrcah38e]:z-30 [&_.loo2ppvkxrcah38e]:transition',
                className
            )}
            {...props}
        >
            <Collection items={items}>{children ?? ((item) => <Avatar {...item} />)}</Collection>
        </div>
    )
}

const avatarStyles = tv({
    base: [
        'inline-grid relative shrink-0 bg-muted align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1',
        'loo2ppvkxrcah38e outline outline-1 -outline-offset-1 outline-foreground/[--ring-opacity]'
    ],
    variants: {
        size: {
            xs: 'size-5',
            sm: 'size-6',
            md: 'size-8',
            lg: 'size-10'
        },
        shape: {
            square: 'rounded-[--avatar-radius] *:rounded-[--avatar-radius] [&_[data-slot=badge]]:rounded-full',
            circle: 'rounded-full *:rounded-full'
        }
    },

    defaultVariants: {
        shape: 'circle',
        size: 'md'
    }
})

type Status = 'danger' | 'success' | 'muted' | 'warning' | 'primary'

interface AvatarProps
    extends React.ComponentPropsWithoutRef<'span'>,
        VariantProps<typeof avatarStyles> {
    src?: string | null
    initials?: string
    alt?: string
    status?: Status
    tooltip?: string
    className?: string
}

const Avatar = ({
    status,
    src = null,
    initials,
    alt = '',
    children,
    tooltip,
    className,
    shape,
    size,
    ...props
}: AvatarProps) => {
    const badgeId = React.useId()
    const ariaLabelledby = [badgeId, children ? badgeId : ''].join(' ')
    return tooltip ? (
        <Tooltip delay={0} closeDelay={0}>
            <Tooltip.Trigger className='outline-none' aria-labelledby={ariaLabelledby}>
                <span
                    aria-labelledby={ariaLabelledby}
                    data-slot='avatar'
                    {...props}
                    className={avatarStyles({ shape, size, className })}
                >
                    {initials && (
                        <svg
                            className='select-none fill-current text-[48px] font-medium uppercase'
                            viewBox='0 0 100 100'
                            aria-hidden={alt ? undefined : 'true'}
                        >
                            {alt && <title>{alt}</title>}
                            <text
                                x='50%'
                                y='50%'
                                alignmentBaseline='middle'
                                dominantBaseline='middle'
                                textAnchor='middle'
                                dy='.125em'
                            >
                                {initials}
                            </text>
                        </svg>
                    )}
                    {src && <img src={src} alt={alt} />}
                    {status && <AvatarBadge size={size} status={status} aria-label={status} />}
                </span>
            </Tooltip.Trigger>
            <Tooltip.Content variant='inverse'>{tooltip}</Tooltip.Content>
        </Tooltip>
    ) : (
        <span
            aria-labelledby={ariaLabelledby}
            data-slot='avatar'
            {...props}
            className={avatarStyles({ shape, size, className })}
        >
            {initials && (
                <svg
                    className='select-none fill-current text-[48px] font-medium uppercase'
                    viewBox='0 0 100 100'
                    aria-hidden={alt ? undefined : 'true'}
                >
                    {alt && <title>{alt}</title>}
                    <text
                        x='50%'
                        y='50%'
                        alignmentBaseline='middle'
                        dominantBaseline='middle'
                        textAnchor='middle'
                        dy='.125em'
                    >
                        {initials}
                    </text>
                </svg>
            )}
            {src && <img src={src} alt={alt} />}
            {status && <AvatarBadge size={size} status={status} aria-label={status} />}
        </span>
    )
}

type AvatarBadgeProps = {
    className?: string
    status?: Status
    fillBackground?: boolean
    'aria-label': string
    size?: AvatarProps['size']
}

const avatarBadgeStyles = tv({
    base: [
        'size-3 z-10 absolute bottom-0 right-0 rounded-full ring-[1.5px] ring-background bg-background'
    ],
    variants: {
        size: {
            xs: 'size-[0.360rem] translate-x-[0%] translate-y-[0%]',
            sm: 'size-1.5 translate-x-[0%] translate-y-[0%]',
            md: 'size-2 translate-x-[5%] translate-y-[5%]',
            lg: 'size-2.5 translate-x-[5%] translate-y-[5%]'
        },
        status: {
            danger: 'bg-danger',
            success: 'bg-success',
            muted: 'bg-muted-foreground',
            warning: 'bg-warning',
            primary: 'bg-primary'
        }
    },
    defaultVariants: {
        size: 'md',
        status: 'primary'
    }
})

const AvatarBadge = ({ size, className, status, ...props }: AvatarBadgeProps) => {
    return (
        <span
            data-slot='badge'
            {...props}
            aria-hidden
            className={avatarBadgeStyles({ size, status, className })}
        >
            <VisuallyHidden>{status}</VisuallyHidden>
        </span>
    )
}

export { Avatar, AvatarGroup }
