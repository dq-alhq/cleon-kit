'use client'

import * as React from 'react'

import { IconCalendarDays } from 'cleon-icons'
import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Button } from './button'
import { Calendar } from './calendar'
import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, Label } from './field'
import { Popover } from './popover'
import { RangeCalendar } from './range-calendar'

interface DatePickerOverlayProps
    extends Omit<Aria.DialogProps, 'children' | 'className' | 'style'>,
        Omit<Aria.PopoverProps, 'children' | 'className' | 'style'> {
    className?: string | ((values: { defaultClassName?: string }) => string)
    children?: React.ReactNode
    closeButton?: boolean
    range?: boolean
}

const DatePickerOverlay = ({ closeButton = true, range, ...props }: DatePickerOverlayProps) => {
    return (
        <Popover.Content
            showArrow={false}
            className='flex justify-center p-4 sm:p-2 sm:pt-3 sm:max-w-[17.2rem] sm:min-w-[17rem]'
            {...props}
        >
            {range ? <RangeCalendar /> : <Calendar />}
            {closeButton && (
                <div className='sm:hidden py-2.5 flex justify-center mx-auto w-full max-w-[inherit]'>
                    <Popover.Close shape='circle' className='w-full'>
                        Close
                    </Popover.Close>
                </div>
            )}
        </Popover.Content>
    )
}

const DatePickerIcon = () => (
    <Button
        size='icon'
        variant='ghost'
        className='group mr-1 h-7 [&>svg]:text-muted-foreground w-8 rounded outline-offset-0 hover:bg-transparent pressed:bg-transparent'
    >
        <IconCalendarDays
            aria-hidden
            className='size-4 text-muted-foreground group-open:text-foreground'
        />
    </Button>
)

interface DatePickerProps<T extends Aria.DateValue> extends Aria.DatePickerProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
}

const DatePicker = <T extends Aria.DateValue>({
    label,
    className,
    description,
    errorMessage,
    ...props
}: DatePickerProps<T>) => {
    return (
        <Aria.DatePicker {...props} className={cn('group flex flex-col gap-1', className)}>
            {label && <Label>{label}</Label>}
            <FieldGroup className='min-w-40'>
                <DateInput className='w-full px-2 uppercase text-base lg:text-sm' />
                <DatePickerIcon />
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <DatePickerOverlay />
        </Aria.DatePicker>
    )
}

export { DatePicker, DatePickerIcon, DatePickerOverlay, type DatePickerProps }
