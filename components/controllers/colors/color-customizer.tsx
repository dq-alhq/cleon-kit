'use client'

import React from 'react'

import { IconBrandTailwind, IconPalette } from 'cleon-icons'
import { type ColorFormat } from 'react-aria-components'

import { Button, Container, Popover, Toggle, Tooltip } from '@/components/ui'

import { CustomColor } from './color-create-preset'
import { ColorShades } from './color-shades'
import { generateColorScale } from './colors'
import _radixcolors from './radix-colors.json'
import SelectFormat from './select-format'
import _tailwindcolors from './tailwind-colors.json'

export default function ColorCustomizer() {
    const [selectedFormat, setSelectedFormat] = React.useState<ColorFormat>('hsl')
    const [tailwindVariable, setTailwindVariable] = React.useState(false)

    const tailwindColors = _tailwindcolors.map((item) => ({
        name: item.name,
        children: generateColorScale(item.color)
    }))
    const radixColors = _radixcolors.map((item) => ({
        name: item.name,
        children: generateColorScale(item.color)
    }))

    return (
        <>
            <div className='w-full rounded-b-lg bg-background/60 backdrop-blur-xl sticky top-12 lg:top-14 py-6 z-10'>
                <Container className='flex flex-row gap-3 justify-between items-center'>
                    <Popover>
                        <Button variant='outline'>
                            <IconPalette /> Presets
                        </Button>
                        <Popover.Content placement='right'>In Progress</Popover.Content>
                    </Popover>
                    <div className='flex items-center gap-3'>
                        <Tooltip>
                            <Toggle
                                size='icon'
                                isSelected={tailwindVariable}
                                onChange={() => setTailwindVariable(!tailwindVariable)}
                            >
                                {({ isSelected }) => (
                                    <IconBrandTailwind
                                        className={
                                            isSelected ? '!text-sky-500' : '!text-foreground'
                                        }
                                    />
                                )}
                            </Toggle>
                            <Tooltip.Content>Enable Tailwind Color Variable</Tooltip.Content>
                        </Tooltip>
                        <SelectFormat
                            selectedFormat={selectedFormat}
                            setSelectedFormat={setSelectedFormat}
                        />
                    </div>
                </Container>
            </div>
            <Container className='w-full space-y-2'>
                <CustomColor {...{ selectedFormat, tailwindVariable }} />
                <h2 className='text-muted-foreground pt-2 font-semibold'>Tailwind Colors</h2>
                <div className='grid sm:grid-cols-2 gap-2'>
                    {tailwindColors.map((color, i) => (
                        <ColorShades
                            key={i}
                            item={color as any}
                            selectedFormat={selectedFormat}
                            tailwindVariable={tailwindVariable}
                        />
                    ))}
                </div>

                <h2 className='text-muted-foreground pt-2 font-semibold'>Radix Colors</h2>
                <div className='grid sm:grid-cols-2 gap-2'>
                    {radixColors.map((color, i) => (
                        <ColorShades
                            key={i}
                            item={color as any}
                            selectedFormat={selectedFormat}
                            tailwindVariable={tailwindVariable}
                        />
                    ))}
                </div>
            </Container>
        </>
    )
}
