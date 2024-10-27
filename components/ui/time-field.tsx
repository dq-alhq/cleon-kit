'use client'

import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { DateInput } from './date-field'
import { Description, FieldError, fieldGroupStyles, Label } from './field'

export interface TimeFieldProps<T extends Aria.TimeValue> extends Aria.TimeFieldProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
}

const timeFieldStyles = tv({
    extend: fieldGroupStyles,
    base: 'flex w-fit min-w-28 justify-around whitespace-nowrap p-2 lg:text-sm'
})

const TimeField = <T extends Aria.TimeValue>({
    label,
    className,
    description,
    errorMessage,
    ...props
}: TimeFieldProps<T>) => {
    return (
        <Aria.TimeField {...props} className={cn('flex flex-col gap-1', className)}>
            <Label>{label}</Label>
            <DateInput className={timeFieldStyles} />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Aria.TimeField>
    )
}

export { TimeField }
