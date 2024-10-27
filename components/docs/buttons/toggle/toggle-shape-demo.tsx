'use client'

import { Toggle } from '@/components/ui'

export default function ToggleShapeDemo() {
    return (
        <Toggle variant='outline' shape='circle'>
            {({ isSelected }) => <>{isSelected ? 'Disabled' : 'Enabled'}</>}
        </Toggle>
    )
}
