'use client'

import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { Description, FieldError, fieldGroupStyles, Label } from './field'

interface DateFieldProps<T extends Aria.DateValue> extends Aria.DateFieldProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
    className?: string
}

const DateField = <T extends Aria.DateValue>({
    label,
    description,
    errorMessage,
    className,
    ...props
}: DateFieldProps<T>) => {
    return (
        <Aria.DateField {...props} className={cn('flex flex-col gap-1', className)}>
            {label && <Label>{label}</Label>}
            <DateInput />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Aria.DateField>
    )
}

const segmentStyles = tv({
    base: 'inline shrink-0 tabular-nums rounded p-0.5 tracking-wider text-foreground caret-transparent outline outline-0 type-literal:px-0 lg:text-sm',
    variants: {
        isPlaceholder: {
            true: 'text-muted-foreground'
        },
        isDisabled: {
            true: 'text-foreground/50'
        },
        isFocused: {
            true: [
                'bg-primary text-primary-foreground',
                'invalid:bg-danger invalid:text-danger-foreground'
            ]
        }
    }
})

const DateInput = (props: Omit<Aria.DateInputProps, 'children'>) => {
    return (
        <Aria.DateInput
            className={Aria.composeRenderProps(props.className, (className, renderProps) =>
                fieldGroupStyles({
                    ...renderProps,
                    className: cn(
                        'min-w-sm block disabled:bg-muted uppercase w-full py-2 px-2.5 text-base lg:text-sm/[1.4rem]',
                        className
                    )
                })
            )}
            {...props}
        >
            {(segment) => <Aria.DateSegment segment={segment} className={segmentStyles} />}
        </Aria.DateInput>
    )
}

export { DateField, DateInput, segmentStyles, type DateFieldProps }
