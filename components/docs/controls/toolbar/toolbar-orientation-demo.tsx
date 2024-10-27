'use client'

import {
    IconAlignCenter,
    IconAlignJustified,
    IconAlignLeft,
    IconCamera,
    IconCircleArrowLeft,
    IconCircleArrowRight,
    IconDotsVertical,
    IconLayoutGrid,
    IconLink,
    IconPencil,
    IconPhoto,
    IconPointer,
    IconTools
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
                    <IconTools />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Gallery'>
                <Toolbar.Item aria-label='Camera' size='icon' variant='outline'>
                    <IconCamera />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Gallery' size='icon' variant='outline'>
                    <IconPhoto />
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
                    <IconAlignJustified />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group>
                <Menu>
                    <Button aria-label='Other options' variant='outline' size='icon'>
                        <IconDotsVertical />
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
                            <IconPhoto />
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
