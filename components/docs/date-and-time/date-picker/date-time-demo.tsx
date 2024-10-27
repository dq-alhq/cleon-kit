'use client'

import React from 'react'

import { DatePicker } from '@/components/ui'
import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'

export default function DateTimeDemo() {
    const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
    const [value, setValue] = React.useState(today)

    return (
        <DatePicker
            hideTimeZone
            hourCycle={24}
            className='max-w-xs'
            value={value}
            onChange={setValue}
            label='Event date'
        />
    )
}
