'use client'

import React from 'react'

import { IconClipboard } from 'cleon-icons'
import { toast } from 'sonner'
import { copyToClipboard } from 'usemods'

import { buttonVariants, Modal } from '@/components/ui'
import '@/lib/styles/code.css'
import { wait } from '@/lib/utils'

import { CodeHighlighter } from './mdx/code'
import { CopyButton } from './mdx/copy-button'

export default function ThemeSnippet({ code = 'TEST' }: { code: string }) {
    const [isCopied, setIsCopied] = React.useState(false)

    function handleCopy() {
        copyToClipboard(code).then(() => {
            toast.success('Copied to clipboard', {
                classNames: {
                    toast: '[&:has([data-icon])_[data-content]]:!ml-0',
                    icon: 'hidden'
                }
            })
            setIsCopied(true)
            wait(2000).then(() => setIsCopied(false))
        })
    }
    return (
        <Modal>
            <Modal.Trigger className={buttonVariants({ variant: 'outline' })}>
                <IconClipboard /> Copy
            </Modal.Trigger>
            <Modal.Content size='3xl' isBlurred aria-label='Theme Snippet'>
                <Modal.Header>
                    <Modal.Title>Custom Styles</Modal.Title>
                    <Modal.Description>Copy this code to your .css file</Modal.Description>
                </Modal.Header>
                <Modal.Body className='relative'>
                    <div className='absolute right-9 top-4 z-20'>
                        <CopyButton isCopied={isCopied} onPress={() => handleCopy()} />
                    </div>
                    <div className='[&_pre]:my-0 font-mono [&_pre]:!border-0 [&_pre]:max-h-[32rem] [&_pre]:mb-4 no-scrollbar [&_pre]:overflow-auto [&_pre]:no-scrollbar'>
                        <CodeHighlighter code={code} lang='css' />
                    </div>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}
