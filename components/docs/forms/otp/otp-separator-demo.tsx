'use client'

import { OTP } from '@/components/ui'

export default function InputOtpSeparatorDemo() {
    return (
        <OTP maxLength={6}>
            <OTP.Group>
                <OTP.Slot index={0} />
                <OTP.Slot index={1} />
                <OTP.Slot index={2} />
            </OTP.Group>
            <OTP.Separator />
            <OTP.Group>
                <OTP.Slot index={3} />
                <OTP.Slot index={4} />
                <OTP.Slot index={5} />
            </OTP.Group>
        </OTP>
    )
}
