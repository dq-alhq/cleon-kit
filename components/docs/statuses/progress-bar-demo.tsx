'use client'

import React from 'react'

import { ProgressBar } from '@/components/ui'

export default function ProgressBarDemo() {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 100))
        }, 200)

        return () => clearInterval(interval)
    }, [])

    return <ProgressBar label='Loading…' value={value} />
}
