'use client'

import { IconChevronLeft, IconChevronRight } from 'cleon-icons'
import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { Button } from './button'

const cellStyles = tv({
    base: 'flex size-10 sm:size-9 cursor-default tabular-nums items-center justify-center rounded-lg lg:text-sm outline-none focus:outline-none',
    variants: {
        isSelected: {
            false: 'text-foreground hover:bg-secondary-foreground/15 pressed:bg-secondary-foreground/20',
            true: 'bg-primary text-primary-foreground invalid:bg-danger invalid:text-danger-foreground'
        },
        isDisabled: {
            true: 'text-muted-foreground/70'
        },
        isFocused: { true: 'ring-2 ring-primary/20' },
        isInvalid: { true: 'ring-2 ring-danger/20' }
    }
})

interface CalendarProps<T extends Aria.DateValue>
    extends Omit<Aria.CalendarProps<T>, 'visibleDuration'> {
    errorMessage?: string
    className?: string
}

const Calendar = <T extends Aria.DateValue>({
    errorMessage,
    className,
    ...props
}: CalendarProps<T>) => {
    return (
        <Aria.Calendar className={cn('max-w-[17.5rem] sm:max-w-[15.8rem]', className)} {...props}>
            <CalendarHeader />
            <Aria.CalendarGrid className='[&_td]:border-collapse [&_td]:px-0'>
                <CalendarGridHeader />
                <Aria.CalendarGridBody>
                    {(date) => (
                        <Aria.CalendarCell
                            date={date}
                            className={Aria.composeRenderProps(
                                className,
                                (className, renderProps) =>
                                    cellStyles({
                                        ...renderProps,
                                        className
                                    })
                            )}
                        />
                    )}
                </Aria.CalendarGridBody>
            </Aria.CalendarGrid>
            {errorMessage && (
                <Aria.Text slot='errorMessage' className='text-sm text-danger'>
                    {errorMessage}
                </Aria.Text>
            )}
        </Aria.Calendar>
    )
}

const CalendarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const { direction } = Aria.useLocale()

    return (
        <header
            className={cn('flex w-full justify-center gap-1 px-1 pb-5 sm:pb-4', className)}
            {...props}
        >
            <Aria.Heading className='mr-2 text-muted-foreground tracking-tight flex-1 text-left font-medium' />
            <div className='flex items-center gap-1'>
                <Button
                    variant='ghost'
                    size='icon'
                    className='[&_svg]:text-foreground size-8 sm:size-7'
                    shape='square'
                    slot='previous'
                >
                    {direction === 'rtl' ? <IconChevronRight /> : <IconChevronLeft aria-hidden />}
                </Button>
                <Button
                    variant='ghost'
                    size='icon'
                    className='[&_svg]:text-foreground size-8 sm:size-7'
                    shape='square'
                    slot='next'
                >
                    {direction === 'rtl' ? <IconChevronLeft /> : <IconChevronRight />}
                </Button>
            </div>
        </header>
    )
}

const CalendarGridHeader = () => {
    return (
        <Aria.CalendarGridHeader>
            {(day) => (
                <Aria.CalendarHeaderCell className='text-sm lg:text-xs font-semibold text-muted-foreground'>
                    {day}
                </Aria.CalendarHeaderCell>
            )}
        </Aria.CalendarGridHeader>
    )
}

Calendar.Header = CalendarHeader
Calendar.GridHeader = CalendarGridHeader
export { Calendar }
