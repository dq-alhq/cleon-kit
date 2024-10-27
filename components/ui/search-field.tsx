'use client'

import { IconLoader2, IconSearch, IconX } from 'cleon-icons'
import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Button } from './button'
import { Description, FieldError, FieldGroup, Input, Label } from './field'

interface SearchFieldProps extends Aria.SearchFieldProps {
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
    isPending?: boolean
}

const SearchField = ({
    className,
    placeholder,
    label,
    description,
    errorMessage,
    isPending,
    ...props
}: SearchFieldProps) => {
    return (
        <Aria.SearchField
            aria-label={placeholder ?? props['aria-label']}
            {...props}
            className={cn('group flex min-w-10 flex-col gap-1', className)}
        >
            {label && <Label>{label}</Label>}
            <FieldGroup>
                <IconSearch
                    aria-hidden
                    className='ml-2 size-4 shrink-0 text-muted-foreground group-disabled:text-muted-foreground/50'
                />
                <Input
                    placeholder={placeholder ?? 'Search...'}
                    className='[&::-webkit-search-cancel-button]:hidden'
                />
                {isPending ? (
                    <IconLoader2 className='mr-2 animate-spin' />
                ) : (
                    <Button
                        size='icon'
                        variant='ghost'
                        className='mr-1 size-8 text-muted-foreground group-empty:invisible pressed:bg-transparent hover:bg-transparent hover:text-foreground pressed:text-foreground'
                    >
                        <IconX aria-hidden />
                    </Button>
                )}
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </Aria.SearchField>
    )
}

export { SearchField, type SearchFieldProps }
