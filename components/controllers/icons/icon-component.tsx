'use client'

import * as icons from 'cleon-icons'
import { renderToString } from 'react-dom/server'

import { Menu } from '@/components/ui'

import {
    copyJsxSvgToClipboard,
    copyJsxToClipboard,
    copySvgToClipboard,
    downloadPng,
    downloadSvg
} from './copy-to-clipboard'
import { Icon } from './icon'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: keyof typeof icons
    size: '4' | '5' | '6' | '7'
    stroke: '1' | '2'
}

export const IconComponent = ({ name, size, stroke }: IconProps) => {
    const svgIcon = renderToString(<Icon icon={name} className={`size-${size}`} />).replaceAll(
        'stroke-width="2"',
        `stroke-width="${stroke}"`
    )
    return (
        <Menu>
            <Menu.Trigger
                aria-label={name}
                id={name}
                className='bg-transparent focus:outline-none transition flex items-center justify-center cursor-pointer hover:bg-muted pressed:ring-2 pressed:ring-primary size-10 rounded-lg'
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: svgIcon
                    }}
                />
            </Menu.Trigger>
            <Menu.Content showArrow>
                <Menu.Header separator className='text-xs'>
                    {name}
                </Menu.Header>
                <Menu.Item
                    onAction={() =>
                        copySvgToClipboard({
                            name: name,
                            size: size,
                            stroke: stroke
                        })
                    }
                >
                    <icons.IconFileCode /> Copy SVG
                </Menu.Item>
                <Menu.Item
                    onAction={() =>
                        copyJsxSvgToClipboard({
                            name: name,
                            size: size,
                            stroke: stroke
                        })
                    }
                >
                    <icons.IconBrandReact /> Copy JSX
                </Menu.Item>
                <Menu.Item onAction={() => copyJsxToClipboard(name)}>
                    <icons.IconTextCursorInput /> Copy Name
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item onAction={() => downloadSvg(svgIcon, name)}>
                    <icons.IconDownload />
                    Download SVG
                </Menu.Item>
                <Menu.Item onAction={async () => await downloadPng(svgIcon, name)}>
                    <icons.IconDownload />
                    Download PNG
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
