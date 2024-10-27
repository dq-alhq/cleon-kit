'use client'

import React from 'react'

import { DateRangePicker } from '@/components/ui'
import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'

export default function DateRangePickerTimeDemo() {
    const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
    const tomorrowWeek = today.add({ days: 12 })

    const [value, setValue] = React.useState({
        start: today,
        end: tomorrowWeek
    })
    return (
        <DateRangePicker
            hideTimeZone
            label='Date time range'
            value={value}
            onChange={setValue}
            hourCycle={24}
        />
    )
}
