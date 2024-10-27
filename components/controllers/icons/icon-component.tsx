'use client'

import type * as icons from 'cleon-icons'
import { renderToString } from 'react-dom/server'

import { Menu, Tooltip } from '@/components/ui'

import { copyJsxSvgToClipboard, copyJsxToClipboard, copySvgToClipboard } from './copy-to-clipboard'
import Icon from './icon'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: keyof typeof icons
    size: '4' | '5' | '6' | '7'
    stroke: '1' | '2'
    color?: string
}

export const IconComponent = ({ name, color, size, stroke }: IconProps) => {
    return (
        <Tooltip>
            <Menu>
                <Tooltip.Trigger
                    id={name}
                    className='bg-transparent focus:outline-none transition flex items-center justify-center cursor-pointer hover:bg-muted pressed:border pressed:text-primary-foreground size-10 rounded-lg'
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: renderToString(<Icon icon={name} className={`size-${size}`} />)
                                .replace('stroke-width="2"', `stroke-width="${stroke}"`)
                                .replaceAll('currentColor', `${color || 'currentColor'}`)
                        }}
                    />
                </Tooltip.Trigger>
                <Menu.Content showArrow>
                    <Menu.Item
                        onAction={() =>
                            copySvgToClipboard({
                                name: name,
                                size: size,
                                stroke: stroke
                            })
                        }
                    >
                        Copy SVG
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
                        Copy JSX
                    </Menu.Item>
                    <Menu.Item onAction={() => copyJsxToClipboard(name)}>Copy Name</Menu.Item>
                </Menu.Content>
            </Menu>
            <Tooltip.Content aria-labelledby={name}>{name}</Tooltip.Content>
        </Tooltip>
    )
}
