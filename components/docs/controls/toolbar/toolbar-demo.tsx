'use client'

import {
    IconAlignCenter,
    IconAlignJustify,
    IconAlignLeft,
    IconAlignRight,
    IconBold,
    IconChevronDown,
    IconCircleArrowLeft,
    IconCircleArrowRight,
    IconImage,
    IconItalic,
    IconLayoutGrid,
    IconLink,
    IconStrikethrough,
    IconUnderline
} from 'cleon-icons'

import { Button, Checkbox, Menu, Toolbar } from '@/components/ui'

export default function ToolbarDemo() {
    return (
        <Toolbar aria-label='Toolbars'>
            <Toolbar.Group aria-label='Text Formatting Options'>
                <Toolbar.Item aria-label='Bold' size='icon' variant='outline'>
                    <IconBold />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Italic' size='icon' variant='outline'>
                    <IconItalic />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Underline' size='icon' variant='outline'>
                    <IconUnderline />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Strikethrough' size='icon' variant='outline'>
                    <IconStrikethrough />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Alignment'>
                <Toolbar.Item aria-label='Align Left' size='icon' variant='outline'>
                    <IconAlignLeft />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Center' size='icon' variant='outline'>
                    <IconAlignCenter />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Right' size='icon' variant='outline'>
                    <IconAlignRight />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Justify' size='icon' variant='outline'>
                    <IconAlignJustify />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group className='ml-auto'>
                <Menu>
                    <Button aria-label='Other options' variant='outline' size='sm'>
                        Options...
                        <IconChevronDown />
                    </Button>
                    <Menu.Content showArrow placement='bottom right'>
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
            <Checkbox>Spell Check</Checkbox>
        </Toolbar>
    )
}
