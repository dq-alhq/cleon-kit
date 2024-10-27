'use client'

import React from 'react'

import { IconVolume } from 'cleon-icons'

import { Slider } from '@/components/ui'

export default function SliderPrefixSuffixDemo() {
    const [volume, setVolume] = React.useState<number>(0.5)
    return (
        <div className='items-center flex gap-4 [&>[data-slot=icon]]:translate-y-3.5 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:shrink-0'>
            <Slider value={volume} onChange={(v) => setVolume(v as number)} label='Volume' />
            <IconVolume />
        </div>
    )
}
