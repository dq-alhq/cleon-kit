'use client'

import { IconPower } from 'cleon-icons'

import { Toggle } from '@/components/ui'

export default function ToggleDisabledDemo() {
    return (
        <Toggle size='icon' isDisabled>
            <IconPower />
        </Toggle>
    )
}
