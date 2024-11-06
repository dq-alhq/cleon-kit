'use client'

import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { Description, FieldError, Label } from './field'

export const textareaStyles = tv({
    base: 'w-full outline-none focus:outline-none min-w-0 rounded-md border bg-background px-2.5 py-2 text-base shadow-sm outline-none transition disabled:bg-muted disabled:opacity-50 sm:text-sm',
    variants: {
        isFocused: { true: 'border-primary/85 ring-4 ring-primary/20' },
        isInvalid: { true: 'border-danger ring-4 ring-danger/20' }
    }
})

interface TextareaProps extends Aria.TextFieldProps {
    autoSize?: boolean
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
    className?: string
}

const Textarea = ({
    className,
    placeholder,
    label,
    description,
    errorMessage,
    ...props
}: TextareaProps) => {
    return (
        <Aria.TextField {...props} className={cn('group flex flex-col gap-1', className)}>
            {label && <Label>{label}</Label>}
            <Aria.TextArea
                placeholder={placeholder}
                className={Aria.composeRenderProps(className, (className, renderProps) =>
                    textareaStyles({
                        ...renderProps,
                        className
                    })
                )}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Aria.TextField>
    )
}

export { Textarea, type TextareaProps }
