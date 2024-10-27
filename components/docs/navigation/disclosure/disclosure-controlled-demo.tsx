'use client'

import React from 'react'

import { Disclosure } from '@/components/ui'

export default function DisclosureControlledDemo() {
    const [expanded, setExpanded] = React.useState(false)

    return (
        <div>
            The disclosure is{' '}
            <strong className='text-info'>{expanded ? 'expanded' : 'collapsed'}</strong>.
            <Disclosure isExpanded={expanded} onExpandedChange={setExpanded}>
                <Disclosure.Trigger>What is your return policy?</Disclosure.Trigger>
                <Disclosure.Content>
                    <p>
                        You can return any item within 30 days of purchase, provided it is in its
                        original condition with proof of purchase.
                    </p>
                </Disclosure.Content>
            </Disclosure>
        </div>
    )
}
