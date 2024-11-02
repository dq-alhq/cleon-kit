'use client'

import { IconInfo } from 'cleon-icons'

import { buttonVariants, Tooltip } from '@/components/ui'

export default function TooltipVariantDemo() {
    return (
        <Tooltip>
            <Tooltip.Trigger
                aria-label='Attention Message'
                className={buttonVariants({
                    variant: 'outline',
                    size: 'icon'
                })}
            >
                <IconInfo />
            </Tooltip.Trigger>
            <Tooltip.Content variant='inverse'>
                <div className='relative'>
                    <strong className='font-semibold'>Attention</strong>
                    <p>This is a warning message.</p>
                </div>
            </Tooltip.Content>
        </Tooltip>
    )
}
