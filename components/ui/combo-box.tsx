'use client'

import * as React from 'react'

import { IconChevronDown, IconX } from 'cleon-icons'
import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Button } from './button'
import { DropdownItem, DropdownSection } from './dropdown'
import { Description, FieldError, FieldGroup, Input, Label } from './field'
import { ListBox } from './list-box'
import { Popover } from './popover'

interface ComboBoxProps<T extends object> extends Omit<Aria.ComboBoxProps<T>, 'children'> {
    label?: string
    placeholder?: string
    description?: string | null
    errorMessage?: string | ((validation: Aria.ValidationResult) => string)
    children: React.ReactNode | ((item: T) => React.ReactNode)
}

const ComboBox = <T extends object>({
    label,
    description,
    errorMessage,
    children,
    placeholder,
    className,
    items,
    ...props
}: ComboBoxProps<T>) => {
    return (
        <Aria.ComboBox
            menuTrigger='focus'
            {...props}
            className={cn('group w-full flex flex-col gap-1', className)}
        >
            <Label>{label}</Label>
            <FieldGroup className='pl-0 relative'>
                <Input className='pl-2.5' placeholder={placeholder} />
                <Button
                    size='icon'
                    variant='ghost'
                    className='size-7 rounded outline-offset-0 text-muted-foreground active:bg-transparent hover:bg-transparent pressed:bg-transparent'
                >
                    {!props?.inputValue && (
                        <IconChevronDown
                            aria-hidden
                            className='text-muted-foreground transition duration-200 group-open:rotate-180 group-open:text-foreground'
                        />
                    )}
                </Button>
                {props?.inputValue && <ComboBoxClearButton />}
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover.Picker>
                <ListBox.Picker items={items}>{children}</ListBox.Picker>
            </Popover.Picker>
        </Aria.ComboBox>
    )
}

const ComboBoxClearButton = () => {
    const state = React.useContext(Aria.ComboBoxStateContext)

    return (
        <Aria.Button
            className='focus:outline-none absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground hover:text-foreground'
            slot={null}
            aria-label='Clear'
            onPress={() => {
                state?.setSelectedKey(null)
                state?.open()
            }}
        >
            <IconX className='size-4' />
        </Aria.Button>
    )
}

const ComboBoxItem = DropdownItem
const ComboBoxSection = DropdownSection

ComboBox.Item = ComboBoxItem
ComboBox.Section = ComboBoxSection

export { ComboBox, type ComboBoxProps }
