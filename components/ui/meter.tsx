'use client'

import { IconTriangleAlert } from 'cleon-icons'
import { motion } from 'framer-motion'
import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Label } from './field'

export interface MeterProps extends Aria.MeterProps {
    label?: string
    className?: string
}

const Meter = ({ label, className, ...props }: MeterProps) => {
    return (
        <Aria.Meter {...props} className={cn('flex flex-col gap-1', className)}>
            {({ percentage, valueText }) => (
                <>
                    <div className='flex w-full justify-between gap-2'>
                        <Label>{label}</Label>
                        <span
                            className={`text-sm tabular-nums ${percentage >= 80 ? 'text-danger' : 'text-muted-foreground'}`}
                        >
                            {percentage >= 80 && (
                                <IconTriangleAlert
                                    aria-label='Alert'
                                    className='inline-block fill-danger/20 text-danger size-4 align-text-bottom'
                                />
                            )}
                            {' ' + valueText}
                        </span>
                    </div>
                    <div className='relative h-2 min-w-64 rounded-full bg-muted outline outline-1 -outline-offset-1 outline-transparent'>
                        <motion.div
                            className='absolute left-0 top-0 h-full rounded-full'
                            initial={{ width: '0%', backgroundColor: getColor(0) }}
                            animate={{
                                width: `${percentage}%`,
                                backgroundColor: getColor(percentage)
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </>
            )}
        </Aria.Meter>
    )
}

const getColor = (percentage: number) => {
    if (percentage < 30) {
        return 'hsl(var(--primary))' // Blue
    }

    if (percentage < 50) {
        return 'hsl(var(--success))' // Green
    }

    if (percentage < 70) {
        return 'hsl(var(--info))' // Yellow
    }

    if (percentage < 80) {
        return 'hsl(var(--warning))' // Orange
    }

    return 'hsl(var(--danger))' // Red
}

export { Meter }
