'use client'

import {
    IconAlignCenter,
    IconAlignJustify,
    IconAlignLeft,
    IconCamera,
    IconCircleArrowLeft,
    IconCircleArrowRight,
    IconEllipsisVertical,
    IconImage,
    IconLayoutGrid,
    IconLink,
    IconPencil,
    IconPencilRuler,
    IconPointer
} from 'cleon-icons'

import { Button, Menu, Toggle, Toolbar } from '@/components/ui'

export default function ToolbarOrientationDemo() {
    return (
        <Toolbar aria-label='Toolbox' orientation='vertical'>
            <Toolbar.Group aria-label='Toolbox'>
                <Toolbar.Item aria-label='Cursor' size='icon' variant='outline'>
                    <IconPointer />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Pencil Box' size='icon' variant='outline'>
                    <IconPencil />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Pencil Box' size='icon' variant='outline'>
                    <IconPencilRuler />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Gallery'>
                <Toolbar.Item aria-label='Camera' size='icon' variant='outline'>
                    <IconCamera />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Gallery' size='icon' variant='outline'>
                    <IconImage />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Alignment'>
                <Toggle aria-label='Align Left' size='icon' variant='outline'>
                    <IconAlignLeft />
                </Toggle>
                <Toolbar.Item aria-label='Align Center' size='icon' variant='outline'>
                    <IconAlignCenter />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Justify' size='icon' variant='outline'>
                    <IconAlignJustify />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group>
                <Menu>
                    <Button aria-label='Other options' variant='outline' size='icon'>
                        <IconEllipsisVertical />
                    </Button>
                    <Menu.Content showArrow placement='right'>
                        <Menu.Item>
                            <IconCircleArrowLeft />
                            Undo
                        </Menu.Item>
                        <Menu.Item>
                            <IconCircleArrowRight />
                            Redo
                        </Menu.Item>
                        <Menu.Item>
                            <IconLink />
                            Insert Link
                        </Menu.Item>
                        <Menu.Item>
                            <IconImage />
                            Insert Image
                        </Menu.Item>
                        <Menu.Item>
                            <IconLayoutGrid />
                            Insert Grid
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </Toolbar.Group>
        </Toolbar>
    )
}
