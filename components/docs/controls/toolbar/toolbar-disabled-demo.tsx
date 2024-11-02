'use client'

import {
    IconAlignJustify,
    IconAlignRight,
    IconCamera,
    IconImage,
    IconPencil,
    IconPencilRuler,
    IconPointer
} from 'cleon-icons'

import { Toggle, Toolbar } from '@/components/ui'

export default function ToolbarDisabledDemo() {
    return (
        <Toolbar aria-label='Toolbox'>
            <Toolbar.Group aria-label='Toolbox'>
                <Toggle isDisabled aria-label='Cursor' size='icon' variant='outline'>
                    <IconPointer />
                </Toggle>
                <Toggle aria-label='Pencil Box' size='icon' variant='outline'>
                    <IconPencil />
                </Toggle>
                <Toggle aria-label='Pencil Box' size='icon' variant='outline'>
                    <IconPencilRuler />
                </Toggle>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group isDisabled aria-label='Gallery'>
                <Toolbar.Item aria-label='Camera' size='icon' variant='outline'>
                    <IconCamera />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Gallery' size='icon' variant='outline'>
                    <IconImage />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Alignment'>
                <Toggle aria-label='Align Right' size='icon' variant='outline'>
                    <IconAlignRight />
                </Toggle>
                <Toggle aria-label='Align Justify' size='icon' variant='outline'>
                    <IconAlignJustify />
                </Toggle>
            </Toolbar.Group>
        </Toolbar>
    )
}
