'use client'

import { IconBrandX } from 'cleon-icons'

import { buttonVariants, Tooltip } from '@/components/ui'

export default function TooltipDemo() {
    return (
        <Tooltip>
            <Tooltip.Trigger
                aria-label='Follow My Twitter'
                className={buttonVariants({
                    variant: 'outline',
                    size: 'icon'
                })}
            >
                <IconBrandX />
            </Tooltip.Trigger>
            <Tooltip.Content>Follow me on X @dqalhq</Tooltip.Content>
        </Tooltip>
    )
}
