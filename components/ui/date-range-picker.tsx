'use client'

import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { DateInput } from './date-field'
import { DatePickerIcon, DatePickerOverlay } from './date-picker'
import { Description, FieldError, FieldGroup, Label } from './field'

interface DateRangePickerProps<T extends Aria.DateValue> extends Aria.DateRangePickerProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
}

const DateRangePicker = <T extends Aria.DateValue>({
    label,
    className,
    description,
    errorMessage,
    ...props
}: DateRangePickerProps<T>) => {
    return (
        <Aria.DateRangePicker {...props} className={cn('group flex flex-col gap-1', className)}>
            {label && <Label>{label}</Label>}
            <FieldGroup className='w-auto min-w-40'>
                <DateInput
                    slot='start'
                    className='px-2 lg:text-sm tabular-nums uppercase text-base'
                />
                <span
                    aria-hidden='true'
                    className='text-foreground group-disabled:text-muted-foreground'
                >
                    –
                </span>
                <DateInput
                    slot='end'
                    className='flex-1 px-2 py-1.5 tabular-nums uppercase text-base lg:text-sm'
                />
                <DatePickerIcon />
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <DatePickerOverlay range />
        </Aria.DateRangePicker>
    )
}

export { DateRangePicker, type DateRangePickerProps }
