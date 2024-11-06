'use client'

import * as Aria from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { Calendar } from './calendar'

const cellRangeStyles = tv({
    base: [
        'flex h-full w-full items-center tabular-nums justify-center rounded-lg',
        'outline-none focus:outline-none'
    ],
    variants: {
        selectionState: {
            none: 'group-hover:bg-secondary-foreground/15 group-pressed:bg-secondary-foreground/20',
            middle: [
                'group-hover:bg-primary/20',
                'group-invalid:group-hover:bg-red-200 dark:group-invalid:group-hover:bg-red-900',
                'group-pressed:bg-primary',
                'group-invalid:group-pressed:bg-red-300 dark:group-invalid:group-pressed:bg-red-800'
            ],
            cap: 'bg-primary text-primary-foreground group-invalid:bg-danger group-invalid:text-danger-foreground'
        },
        isDisabled: {
            true: 'text-muted-foreground/70'
        },
        isFocused: { true: 'ring-2 ring-primary/20' },
        isInvalid: { true: 'ring-2 ring-danger/20' }
    }
})

interface RangeCalendarProps<T extends Aria.DateValue>
    extends Omit<Aria.RangeCalendarProps<T>, 'visibleDuration'> {
    errorMessage?: string
}

const RangeCalendar = <T extends Aria.DateValue>({
    errorMessage,
    className,
    ...props
}: RangeCalendarProps<T>) => {
    return (
        <Aria.RangeCalendar
            className={cn('max-w-[17.5rem] sm:max-w-[15.8rem]', className)}
            {...props}
        >
            <Calendar.Header />
            <Aria.CalendarGrid className='[&_td]:border-collapse [&_td]:px-0'>
                <Calendar.GridHeader />
                <Aria.CalendarGridBody>
                    {(date) => (
                        <Aria.CalendarCell
                            date={date}
                            className={twJoin([
                                'group size-10 lg:size-9 cursor-default lg:text-sm outline outline-0 outside-month:text-zinc-300 selection-start:rounded-s-lg selection-end:rounded-e-lg',
                                'selected:bg-primary/10 dark:selected:bg-primary/15 selected:text-primary',
                                '[td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg',
                                'invalid:selected:bg-red-100 dark:invalid:selected:bg-red-700/30'
                            ])}
                        >
                            {({
                                formattedDate,
                                isSelected,
                                isSelectionStart,
                                isSelectionEnd,
                                ...renderProps
                            }) => (
                                <span
                                    className={cellRangeStyles({
                                        ...renderProps,
                                        selectionState:
                                            isSelected && (isSelectionStart || isSelectionEnd)
                                                ? 'cap'
                                                : isSelected
                                                  ? 'middle'
                                                  : 'none'
                                    })}
                                >
                                    {formattedDate}
                                </span>
                            )}
                        </Aria.CalendarCell>
                    )}
                </Aria.CalendarGridBody>
            </Aria.CalendarGrid>
            {errorMessage && (
                <Aria.Text slot='errorMessage' className='text-sm text-danger'>
                    {errorMessage}
                </Aria.Text>
            )}
        </Aria.RangeCalendar>
    )
}

export { RangeCalendar }
