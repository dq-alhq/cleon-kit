'use client'

import { IconChevronDown, IconChevronUp, IconMinus, IconPlus } from 'cleon-icons'
import * as Aria from 'react-aria-components'

import { cn, useMediaQuery } from '@/lib/utils'

import { Description, fieldBorderStyles, FieldError, FieldGroup, Input, Label } from './field'

interface NumberFieldProps extends Aria.NumberFieldProps {
    label?: string
    description?: string
    placeholder?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
}

const NumberField = ({
    label,
    placeholder,
    description,
    className,
    errorMessage,
    ...props
}: NumberFieldProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    return (
        <Aria.NumberField {...props} className={cn('group flex flex-col gap-1', className)}>
            <Label>{label}</Label>
            <FieldGroup className='group-disabled:bg-muted'>
                {(renderProps) => (
                    <>
                        {isMobile ? <StepperButton slot='decrement' className='border-r' /> : null}
                        <Input className='tabular-nums' placeholder={placeholder} />
                        <div
                            className={fieldBorderStyles({
                                ...renderProps,
                                className: 'grid h-10 place-content-center border-s'
                            })}
                        >
                            {isMobile ? (
                                <StepperButton slot='increment' />
                            ) : (
                                <div className='flex h-full flex-col'>
                                    <StepperButton
                                        slot='increment'
                                        emblemType='chevron'
                                        className='h-5 px-1'
                                    />
                                    <div
                                        className={fieldBorderStyles({
                                            ...renderProps,
                                            className: 'border-b'
                                        })}
                                    />
                                    <StepperButton
                                        slot='decrement'
                                        emblemType='chevron'
                                        className='h-5 px-1'
                                    />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Aria.NumberField>
    )
}

interface StepperButtonProps extends Aria.ButtonProps {
    slot: 'increment' | 'decrement'
    emblemType?: 'chevron' | 'default'
    className?: string
}

const StepperButton = ({
    slot,
    className,
    emblemType = 'default',
    ...props
}: StepperButtonProps) => {
    const icon =
        emblemType === 'chevron' ? (
            slot === 'increment' ? (
                <IconChevronUp className='size-5' />
            ) : (
                <IconChevronDown className='size-5' />
            )
        ) : slot === 'increment' ? (
            <IconPlus />
        ) : (
            <IconMinus />
        )
    return (
        <Aria.Button
            className={cn(
                'h-10 cursor-default px-2 text-muted-foreground pressed:bg-primary pressed:text-primary-foreground group-disabled:bg-muted',
                className
            )}
            slot={slot}
            {...props}
        >
            {icon}
        </Aria.Button>
    )
}

export { NumberField, type NumberFieldProps }
