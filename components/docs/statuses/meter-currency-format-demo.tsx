'use client'

import { Meter } from '@/components/ui'

export default function MeterCurrencyFormatDemo() {
    return (
        <Meter label='Revenue' formatOptions={{ style: 'currency', currency: 'USD' }} value={15} />
    )
}
