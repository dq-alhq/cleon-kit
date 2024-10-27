'use client'

import React from 'react'

import { IconMenu } from 'cleon-icons'
import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { Checkbox } from './checkbox'

type GridListProps<T extends object> = Aria.GridListProps<T>

const GridList = <T extends object>({ children, className, ...props }: GridListProps<T>) => (
    <Aria.GridList
        className={cn(
            'relative [&>[data-drop-target]]:border [&>[data-drop-target]]:border-primary max-h-96 overflow-auto rounded-lg border',
            className
        )}
        {...props}
    >
        {children}
    </Aria.GridList>
)

const itemStyles = tv({
    base: 'relative group transition outline-none flex cursor-default select-none gap-3 border-y px-3 -mb-px py-2 lg:text-sm text-foreground -outline-offset-2 first:rounded-t-md first:border-t-0 last:mb-0 last:rounded-b-md last:border-b-0',
    variants: {
        isHovered: { true: 'bg-primary/10' },
        isSelected: {
            true: 'bg-primary/20 z-20 border-muted/50'
        },
        isFocused: {
            true: 'outline-none'
        },
        isFocusVisible: {
            true: 'ring-1 ring-primary outline-none'
        },
        isDisabled: {
            true: 'text-muted-foreground'
        }
    }
})

const Item = ({ children, className, ...props }: Aria.GridListItemProps) => {
    const textValue = typeof children === 'string' ? children : undefined
    return (
        <Aria.GridListItem
            textValue={textValue}
            {...props}
            className={Aria.composeRenderProps(className, (className, renderProps) =>
                itemStyles({ ...renderProps, className })
            )}
        >
            {({ selectionMode, selectionBehavior, allowsDragging }) => (
                <>
                    {allowsDragging && (
                        <Aria.Button
                            slot='drag'
                            className='cursor-grab dragging:cursor-grabbing [&>svg]:text-muted-foreground'
                        >
                            <IconMenu />
                        </Aria.Button>
                    )}

                    <span
                        aria-hidden
                        className='absolute inset-y-0 left-0 hidden h-full w-0.5 bg-primary group-selected:block'
                    />
                    {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
                        <Checkbox className='-mr-2' slot='selection' />
                    )}
                    {children as React.ReactNode}
                </>
            )}
        </Aria.GridListItem>
    )
}

const EmptyState = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div className='p-6' {...props} />
)

GridList.Item = Item
GridList.EmptyState = EmptyState

export { GridList }
