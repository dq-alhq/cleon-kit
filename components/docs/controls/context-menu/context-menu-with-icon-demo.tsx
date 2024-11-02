'use client'

import { IconCopy, IconFolder, IconHighlighter, IconTrash, IconUpload } from 'cleon-icons'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuWithIconDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Item>
                    <IconFolder />
                    Open
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <IconHighlighter />
                    Rename
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <IconCopy />
                    Duplicate
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <IconUpload />
                    Share
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item isDanger>
                    <IconTrash />
                    Delete
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
