'use client'

import { Toggle } from '@/components/ui'

export default function ToggleDemo() {
    return <Toggle>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
}
