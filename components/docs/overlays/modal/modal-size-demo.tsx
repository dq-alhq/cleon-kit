'use client'

import * as React from 'react'

import { Button, Modal } from '@/components/ui'

type Size = Pick<React.ComponentProps<typeof Modal.Content>, 'size'>['size']
const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
export default function ModalSizeDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [modalSize, setModalSize] = React.useState<Size>('md')

    const handlePress = (size: Size, open: boolean) => {
        setModalSize(size)
        setIsOpen(open)
    }
    return (
        <>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
                {sizes.map((size, idx) => (
                    <Button variant='outline' key={idx} onPress={() => handlePress(size, true)}>
                        Open {size}
                    </Button>
                ))}
            </div>

            <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen} size={modalSize}>
                <Modal.Header>
                    <Modal.Title>Project Update</Modal.Title>
                    <Modal.Description>
                        Dive deep into our project’s latest updates where we've streamlined workflow
                        and improved user interfaces.
                    </Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant='outline' onPress={() => setIsOpen(false)}>
                        Close
                    </Button>
                    <Button onPress={() => setIsOpen(false)}>Confirm</Button>
                </Modal.Footer>
            </Modal.Content>
        </>
    )
}
