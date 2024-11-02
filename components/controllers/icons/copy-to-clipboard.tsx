'use client'

import { renderToStaticMarkup } from 'react-dom/server'
import { toast } from 'sonner'

import { convertSvgToJsx } from '@/lib/utils/icons'

import { Icon } from './icon'

type IconProps = {
    name: string
    size?: '4' | '5' | '6' | '7'
    stroke?: '1' | '2'
}

const slugify = (str: string) => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
        .replace(/([A-Z])([A-Z])/g, '$1-$2') // insert hyphen between uppercase letters
        .replace(/([a-zA-Z])(\d)/g, '$1-$2') // Insert hyphen between letters and numbers
        .toLowerCase()
}

export const copySvgToClipboard = (props: IconProps) => {
    // @ts-ignore
    const svgString = renderToStaticMarkup(<Icon icon={props.name} />)
    navigator.clipboard
        .writeText(
            svgString
                .replace('size-5', `size-${props.size}`)
                .replace('stroke-width="2"', `stroke-width="${props.stroke}"`)
        )
        .then(() => {
            toast('SVG copied to clipboard')
        })
}

export const copyJsxSvgToClipboard = (props: IconProps) => {
    // @ts-ignore
    const svgString = renderToStaticMarkup(<Icon icon={props.name} />)
    navigator.clipboard
        .writeText(
            convertSvgToJsx(
                svgString
                    .replace('size-4', `size-${props.size}`)
                    .replace('stroke-width="2"', `stroke-width="${props.stroke}"`)
            )
        )
        .then(() => {
            toast('JSX copied to clipboard')
        })
}

export const copyJsxToClipboard = (name: string) => {
    navigator.clipboard.writeText(`<Icon${name} />`).then(() => {
        toast(`<Icon${name} /> copied to clipboard`)
    })
}

export const downloadSvg = (svgString: string, name: string) => {
    const blob = new Blob([svgString], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${slugify(name)}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}

export const downloadPng = async (svgString: string, name: string) => {
    const img = new Image()
    const blob = new Blob([svgString], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    img.src = url
    img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const size = 256
        canvas.width = size
        canvas.height = size
        ctx?.drawImage(img, 0, 0, img.width, img.height, 0, 0, size, size)
        const pngUrl = canvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.href = pngUrl
        link.download = `${slugify(name)}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }
    img.onerror = () => {
        console.error('Error loading image')
        URL.revokeObjectURL(url)
    }
}
