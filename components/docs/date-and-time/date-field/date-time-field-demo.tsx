'use client'

import React from 'react'

import { DateField } from '@/components/ui'
import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'

export default function DateTimeFieldDemo() {
    const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
    const [value, setValue] = React.useState(today)
    return (
        <DateField
            hideTimeZone
            hourCycle={24}
            value={value}
            onChange={setValue}
            label='Event date'
        />
    )
}
