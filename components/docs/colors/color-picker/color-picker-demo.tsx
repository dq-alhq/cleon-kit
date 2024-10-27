'use client'

import React from 'react'

import { ColorPicker } from '@/components/ui'
import { parseColor } from '@react-stately/color'

export default function ColorPickerDemo() {
    const [color, setColor] = React.useState(parseColor('#0d6efd'))
    return <ColorPicker label='Color Picker' value={color} onChange={setColor} />
}
