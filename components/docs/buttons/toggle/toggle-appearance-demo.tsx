'use client'

import { Toggle } from '@/components/ui'

export default function ToggleAppearanceDemo() {
    return (
        <div className='flex gap-2'>
            <Toggle>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
            <Toggle variant='outline'>
                {({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}
            </Toggle>
            <Toggle variant='solid'>{({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}</Toggle>
        </div>
    )
}
