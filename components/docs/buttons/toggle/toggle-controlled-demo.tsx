'use client'

import React from 'react'

import { IconLink, IconUnlink } from 'cleon-icons'

import { Toggle } from '@/components/ui'

export default function ToggleControlledDemo() {
    const [isSelected, setSelected] = React.useState(false)
    return (
        <Toggle size='icon' isSelected={isSelected} onChange={setSelected}>
            {({ isSelected }) => <>{isSelected ? <IconUnlink /> : <IconLink />}</>}
        </Toggle>
    )
}
