'use client'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuDisabledDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Item id='view'>View</ContextMenu.Item>
                <ContextMenu.Item id='edit'>Edit</ContextMenu.Item>
                <ContextMenu.Item id='gsu' isDisabled>
                    Generate Short URL
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
