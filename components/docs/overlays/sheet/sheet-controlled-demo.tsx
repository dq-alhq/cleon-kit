'use client'

import React from 'react'

import { Button, Sheet, Textarea } from '@/components/ui'

export default function SheetControlledDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <>
            <Button onPress={() => setIsOpen(true)}>Feedback</Button>
            <Sheet.Content isOpen={isOpen} onOpenChange={setIsOpen}>
                <Sheet.Header>
                    <Sheet.Title>Submit Feedback</Sheet.Title>
                    <Sheet.Description>
                        Please let us know your thoughts and how we can improve our service.
                    </Sheet.Description>
                </Sheet.Header>
                <Sheet.Body>
                    <Textarea label='Your Feedback' placeholder='Type your feedback here...' />
                </Sheet.Body>
                <Sheet.Footer>
                    <Button variant='outline' onPress={() => setIsOpen(false)}>
                        Close
                    </Button>
                    <Button onPress={() => setIsOpen(false)}>Submit Feedback</Button>
                </Sheet.Footer>
            </Sheet.Content>
        </>
    )
}
