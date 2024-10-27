'use client'

import * as React from 'react'

import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { ColorPicker } from './color-picker'
import { ColorSwatch } from './color-swatch'
import { Description, FieldError, FieldGroup, fieldGroupPrefixStyles, Input, Label } from './field'

interface ColorFieldProps extends Aria.ColorFieldProps {
    label?: string
    description?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
    placeholder?: string
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    isLoading?: boolean
    enableColorPicker?: boolean
}

const ColorField = ({
    label,
    description,
    errorMessage,
    placeholder,
    prefix,
    suffix,
    isLoading,
    enableColorPicker = true,
    className,
    ...props
}: ColorFieldProps) => {
    const value = props.value ?? props.defaultValue
    return (
        <Aria.ColorField
            {...props}
            aria-label={props['aria-label'] ?? 'Color field'}
            className={cn(
                '[&_[data-slot=color-swatch]]:ml-2 group w-full flex flex-col gap-y-1',
                className
            )}
        >
            {label && <Label>{label}</Label>}
            <FieldGroup
                data-loading={isLoading ? 'true' : undefined}
                className={fieldGroupPrefixStyles()}
            >
                {prefix ? <span className='attribute prefix'>{prefix}</span> : null}
                <div className='flex items-center'>
                    {value && (
                        <span>
                            {enableColorPicker ? (
                                <ColorPicker onChange={props.onChange} defaultValue={value} />
                            ) : (
                                <ColorSwatch className='size-6' color={value.toString('hex')} />
                            )}
                        </span>
                    )}

                    <Input className='px-2.5' placeholder={placeholder} />
                </div>
                {suffix ? <span className='attribute ml-auto suffix'>{suffix}</span> : null}
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Aria.ColorField>
    )
}

export { ColorField }
