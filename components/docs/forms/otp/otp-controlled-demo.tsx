'use client'

import React from 'react'

import { OTP } from '@/components/ui'

export default function InputOtpControlledDemo() {
    const [value, setValue] = React.useState('')
    return (
        <div className='space-y-2'>
            <OTP maxLength={6} value={value} onChange={setValue}>
                <OTP.Group>
                    {[...Array(6)].map((_, index) => (
                        <OTP.Slot key={index} index={index} />
                    ))}
                </OTP.Group>
            </OTP>

            <div className='text-center text-sm'>
                {value === '' ? <>Enter your one-time password.</> : <>You entered: {value}</>}
            </div>
        </div>
    )
}
