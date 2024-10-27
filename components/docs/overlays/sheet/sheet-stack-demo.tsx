'use client'

import { Button, Sheet } from '@/components/ui'

export default function SheetStackDemo() {
    return (
        <Sheet>
            <Button variant='outline'>Stack</Button>
            <Sheet.Content isStack={false}>
                <Sheet.Header>
                    <Sheet.Title>Not Stacked</Sheet.Title>
                    <Sheet.Description>This sheet is not stacked.</Sheet.Description>
                </Sheet.Header>
                <Sheet.Footer>
                    <Sheet.Close>Cancel</Sheet.Close>
                    <Button>Save Changes</Button>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet>
    )
}
