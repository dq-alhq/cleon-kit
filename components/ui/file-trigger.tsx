'use client'

import { IconCamera, IconFolder, IconPaperclip } from 'cleon-icons'
import * as Aria from 'react-aria-components'
import { type VariantProps } from 'tailwind-variants'

import { Button, type buttonVariants } from './button'

interface FileTriggerProps extends Aria.FileTriggerProps, VariantProps<typeof buttonVariants> {
    withIcon?: boolean
    isDisabled?: boolean
}

const FileTrigger = ({
    variant = 'primary',
    size = 'md',
    shape = 'square',
    withIcon = true,
    ...props
}: FileTriggerProps) => {
    return (
        <>
            <Aria.FileTrigger {...props}>
                <Button isDisabled={props.isDisabled} variant={variant} size={size} shape={shape}>
                    {withIcon && (
                        <>
                            {props.defaultCamera ? (
                                <IconCamera />
                            ) : props.acceptDirectory ? (
                                <IconFolder />
                            ) : (
                                <IconPaperclip className='rotate-45' />
                            )}
                        </>
                    )}
                    {props.children ? (
                        props.children
                    ) : (
                        <>
                            {props.allowsMultiple
                                ? 'Browse a files'
                                : props.acceptDirectory
                                  ? 'Browse'
                                  : 'Browse a file'}
                            ...
                        </>
                    )}
                </Button>
            </Aria.FileTrigger>
        </>
    )
}

export { FileTrigger }
