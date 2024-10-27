'use client'

import * as React from 'react'

import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { Description, FieldError, Label } from './field'

interface RadioGroupProps extends Omit<Aria.RadioGroupProps, 'children'> {
    label?: string
    children?: React.ReactNode
    description?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
    className?: string
}

const RadioGroup = ({
    label,
    description,
    errorMessage,
    children,
    className,
    ...props
}: RadioGroupProps) => {
    return (
        <Aria.RadioGroup {...props} className={cn('group flex flex-col gap-2', className)}>
            {label && <Label>{label}</Label>}
            <div className='flex select-none gap-2 group-orientation-horizontal:flex-wrap group-orientation-horizontal:gap-2 sm:group-orientation-horizontal:gap-4 group-orientation-vertical:flex-col'>
                {children}
            </div>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Aria.RadioGroup>
    )
}

const radioStyles = tv({
    base: 'size-4 shrink-0 rounded-full border transition',
    variants: {
        isSelected: {
            false: 'border-muted',
            true: 'border-[4.5px] border-primary'
        },
        isFocused: {
            true: [
                'border-primary bg-primary/20 ring-4 ring-primary/20',
                'group-invalid:border-danger/70 group-invalid:bg-danger/20 group-invalid:ring-danger/20'
            ]
        },
        isInvalid: {
            true: 'border-danger/70 bg-danger/20'
        },
        isDisabled: {
            true: 'opacity-50'
        }
    }
})

interface RadioProps extends Aria.RadioProps {
    description?: string
    className?: string
    children?: React.ReactNode
}

const Radio = ({ description, className, children, ...props }: RadioProps) => {
    return (
        <>
            <Aria.Radio
                {...props}
                className={cn(
                    'group flex items-center gap-2 text-sm text-foreground transition disabled:text-foreground/50',
                    className
                )}
            >
                {(renderProps) => (
                    <div className='flex gap-2'>
                        <div
                            className={radioStyles({
                                ...renderProps,
                                className: 'description' in props ? 'mt-1' : 'mt-0.5'
                            })}
                        />
                        <div className='flex flex-col gap-1'>
                            <>{children}</>
                            {description && (
                                <Description className='block'>{description}</Description>
                            )}
                        </div>
                    </div>
                )}
            </Aria.Radio>
        </>
    )
}

export { Radio, RadioGroup, radioStyles }
