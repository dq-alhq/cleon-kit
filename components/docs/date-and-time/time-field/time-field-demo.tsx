'use client'

import { TimeField } from '@/components/ui'
import { Time } from '@internationalized/date'

export default function TimeFieldDemo() {
    return <TimeField defaultValue={new Time()} label='Event time' />
}
