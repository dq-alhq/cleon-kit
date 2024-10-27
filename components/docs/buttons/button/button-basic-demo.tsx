'use client'

import { Button } from '@/components/ui'

export default function ButtonBasicDemo() {
    return <Button onPress={() => alert('You pressed me')}>Button</Button>
}
