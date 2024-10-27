'use client'

import { titleCase } from 'usemods'

import { Button, buttonVariants } from '@/components/ui'

type Appearance = keyof typeof buttonVariants.variants.variant

export default function ButtonVariantDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            {Object.keys(buttonVariants.variants.variant).map((variant) => (
                <div key={variant}>
                    <Button variant={variant as Appearance}>{titleCase(variant)}</Button>
                </div>
            ))}
        </div>
    )
}
