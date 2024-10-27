'use client'

import { IconLink, IconUnlink } from 'cleon-icons'

import { Toggle } from '@/components/ui'

export default function ToggleSizeDemo() {
    return (
        <div className='flex flex-wrap gap-2'>
            <Toggle variant='outline' size='icon'>
                {({ isSelected }) => <>{isSelected ? <IconUnlink /> : <IconLink />}</>}
            </Toggle>
            <Toggle variant='outline' size='sm'>
                {({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}
            </Toggle>
            <Toggle variant='outline' size='md'>
                {({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}
            </Toggle>
            <Toggle variant='outline' size='lg'>
                {({ isSelected }) => <>{isSelected ? 'ON' : 'OFF'}</>}
            </Toggle>
        </div>
    )
}
