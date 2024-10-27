'use client'

import { IconCheck, IconCopy } from 'cleon-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { Button, type ButtonProps } from 'react-aria-components'

interface CopyButtonProps extends ButtonProps {
    isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
    return (
        <Button
            aria-label='Copy'
            className='size-7 outline-none focus:outline-none flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-white backdrop-blur hover:bg-zinc-700'
            {...props}
        >
            <AnimatePresence mode='wait' initial={false}>
                {isCopied ? (
                    <motion.span
                        key='copied'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <IconCheck />
                    </motion.span>
                ) : (
                    <motion.span
                        key='copy'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <IconCopy />
                    </motion.span>
                )}
            </AnimatePresence>
        </Button>
    )
}
