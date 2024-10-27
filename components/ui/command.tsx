'use client'

import * as React from 'react'

import { IconSearch, IconX } from 'cleon-icons'
import { Command as CMDK } from 'cmdk'
import * as Aria from 'react-aria-components'

import { cn, useMediaQuery } from '@/lib/utils'

import { Keyboard, type KeyboardProps } from './keyboard'
import { Separator } from './separator'

interface CommandContextProps {
    hideSearchIndicator?: boolean
    hideCloseButton?: boolean
    messageOnEmpty?: boolean | string
    isBlurred?: boolean
}

const CommandContext = React.createContext<CommandContextProps>({})

interface CommandRootProps {
    CommandEmpty?: typeof CommandEmpty
    CommandInput?: typeof CommandInput
    CommandItem?: typeof CommandItem
    CommandKeyboard?: typeof CommandKeyboard
    CommandList?: typeof CommandList
    CommandSection?: typeof CommandSection
    CommandSeparator?: typeof CommandSeparator
    CommandDescription?: typeof CommandDescription
}

interface CommandProps extends Aria.ModalOverlayProps, CommandRootProps, CommandContextProps {
    children: React.ReactNode
    value?: string
    messageOnEmpty?: boolean | string
    onValueChange?: (value: string) => void
    className?: string
}

const Command = ({
    className,
    hideSearchIndicator = false,
    hideCloseButton = false,
    messageOnEmpty,
    value,
    onValueChange,
    children,
    isBlurred = false,
    ...props
}: CommandProps) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    return (
        <CommandContext.Provider value={{ hideSearchIndicator, hideCloseButton, messageOnEmpty }}>
            <Aria.ModalOverlay
                isDismissable
                className={cn(
                    'fixed inset-0 max-h-[--visual-viewport-height] z-50 bg-black/15 dark:bg-black/40 entering:animate-in entering:fade-in-0 exiting:animate-in exiting:fade-out-0',
                    isBlurred ? 'backdrop-blur' : 'bg-black/15 dark:bg-black/40'
                )}
                {...props}
            >
                <Aria.Modal
                    className={cn(
                        'fixed bottom-0 left-[50%] top-auto z-50 grid h-[calc(100vh-35%)] w-full max-w-full translate-x-[-50%] gap-4 overflow-hidden rounded-t-xl bg-background text-overlay-foreground shadow-lg ring-1 ring-dark/5 dark:ring-border sm:bottom-auto sm:top-[6rem] sm:h-auto sm:w-full sm:max-w-2xl sm:rounded-xl',
                        'sm:entering:slide-in-from-bottom-auto entering:duration-300 entering:animate-in entering:fade-in-0 entering:slide-in-from-bottom-1/2 entering:slide-in-from-left-1/2 entering:[transition-timing-function:ease-out] sm:entering:duration-300 sm:entering:slide-in-from-top-[2rem]',
                        'exiting:duration-300 exiting:animate-out exiting:fade-out-0 exiting:slide-out-to-bottom-1/2 exiting:slide-out-to-left-1/2 exiting:[transition-timing-function:ease] sm:exiting:slide-out-to-top-[4rem]'
                    )}
                >
                    <Aria.Dialog className='outline-none' aria-label='Command Palette'>
                        {({ close }) => (
                            <>
                                <CMDK
                                    value={value}
                                    onValueChange={onValueChange}
                                    className={cn(
                                        'flex h-svh w-full flex-col overflow-hidden rounded-md sm:h-full',
                                        '[&_[cmdk-group-heading]]:ml-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:-mb-1.5 [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12',
                                        '[&_[cmdk-item]]:py-2.5 [&_[cmdk-item]]:pl-2.5 [&_[cmdk-item]]:pr-4',
                                        className
                                    )}
                                >
                                    {children}
                                </CMDK>
                                {!hideCloseButton && (
                                    <Aria.Button
                                        autoFocus={!isDesktop}
                                        onPress={close}
                                        className={cn(
                                            'absolute right-3 top-1.5 [&>span>svg]:text-muted-foreground pressed:[&_svg]:text-foreground lg:top-3.5 rounded-full border lg:border-muted border-transparent lg:bg-muted/50 py-2.5 px-2.5 lg:py-0.5 text-xs transition data-[state=open]:bg-muted data-[state=open]:text-muted-foreground lg:focus:border-foreground/70 focus:outline-none lg:focus:ring-2 lg:focus:ring-primary disabled:pointer-events-none',
                                            'focus:outline-none lg:focus:bg-primary/10 lg:focus:ring-2 lg:focus:ring-primary/20 lg:focus:border-primary/70',
                                            'disabled:pointer-events-none'
                                        )}
                                    >
                                        <span className='lg:block hidden'>Esc</span>
                                        <span className='lg:hidden -mr-2 block'>
                                            <IconX />
                                            <span className='sr-only'>Close command palette</span>
                                        </span>
                                    </Aria.Button>
                                )}
                            </>
                        )}
                    </Aria.Dialog>
                </Aria.Modal>
            </Aria.ModalOverlay>
        </CommandContext.Provider>
    )
}

type CommandInputProps = React.ComponentPropsWithoutRef<typeof CMDK.Input>

const CommandInput = React.forwardRef<React.ElementRef<typeof CMDK.Input>, CommandInputProps>(
    ({ className, ...props }, ref) => {
        const { hideSearchIndicator } = React.useContext(CommandContext)
        return (
            <div className='flex border-b items-center px-3'>
                {!hideSearchIndicator && <IconSearch className='mr-2 size-5 shrink-0 opacity-50' />}
                <CMDK.Input
                    autoFocus
                    ref={ref}
                    className={cn(
                        'flex w-full rounded-md bg-transparent text-base placeholder:text-muted-foreground',
                        'focus:outline-none',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                        hideSearchIndicator && 'pl-1',
                        className
                    )}
                    {...props}
                />
            </div>
        )
    }
)

CommandInput.displayName = CMDK.Input.displayName

type CommandListProps = React.ComponentProps<typeof CMDK.List>

const CommandList = ({ className, ...props }: CommandListProps) => {
    const { messageOnEmpty } = React.useContext(CommandContext)
    return (
        <CMDK.List
            className={cn(
                'overflow-y-auto lg:pb-0 max-h-[calc(100vh-35%)] pb-16 [&:not(:has(.section))]:p-2 [&:not(:has(.section))_.separator]:my-2 overflow-x-hidden md:max-h-[456px]',
                className
            )}
            {...props}
        >
            {messageOnEmpty !== false && (
                <CommandEmpty>
                    {typeof messageOnEmpty === 'string' ? messageOnEmpty : 'No results found.'}
                </CommandEmpty>
            )}
            {props.children}
        </CMDK.List>
    )
}

type CommandEmptyProps = React.ComponentProps<typeof CMDK.Empty>

const CommandEmpty = ({ className, ...props }: CommandEmptyProps) => {
    return (
        <CMDK.Empty
            className={cn('py-6 text-center text-sm text-muted-foreground', className)}
            {...props}
        />
    )
}

interface CommandSectionProps extends React.ComponentProps<typeof CMDK.Group> {
    separator?: boolean
}

const CommandSection = ({ className, separator, ...props }: CommandSectionProps) => {
    return (
        <>
            <CMDK.Group
                className={cn(
                    'section overflow-hidden py-2 px-2 text-foreground',
                    '[&_[cmdk-group-heading]]:select-none [&_[cmdk-group-heading]]:ml-[1px] [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[0.8rem] [&_[cmdk-group-heading]]:text-muted-foreground',
                    className
                )}
                {...props}
            >
                {props.children}
                {separator && <CommandSeparator className='mt-2' />}
            </CMDK.Group>
        </>
    )
}

const CommandSeparator = ({ className, ...props }: Aria.SeparatorProps) => {
    return (
        <div className='-mx-4 separator'>
            <Separator className={className} {...props} orientation='horizontal' />
        </div>
    )
}

interface CommandItemProps extends React.ComponentProps<typeof CMDK.Item> {
    isDanger?: boolean
}

const CommandItem = ({ isDanger, className, ...props }: CommandItemProps) => {
    return (
        <CMDK.Item
            data-danger={isDanger ? 'true' : undefined}
            className={cn(
                'group relative flex cursor-default select-none items-center rounded-lg py-2 text-sm outline-none',
                'data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground [&[data-selected=true]_svg]:text-primary-foreground',
                'focus-visible:bg-primary focus-visible:text-primary-foreground [&:focus-visible_svg]:text-primary-foreground',
                'data-[danger=true]:text-danger data-[danger=true]:data-[selected=true]:bg-danger data-[danger=true]:data-[selected=true]:text-danger-foreground',
                'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
                '[&_svg]:mr-2 [&_svg]:size-[1.10rem] [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
                '[&_[data-slot=avatar]]:mr-2 [&_[data-slot=avatar]]:size-[1.10rem] [&_[data-slot=avatar]]:shrink-0',
                isDanger &&
                    'text-danger data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground [&[data-selected=true]_svg]:text-danger-foreground',
                className
            )}
            {...props}
        />
    )
}

interface CommandDescriptionProps extends Aria.TextProps {
    color?: 'danger' | 'warning' | 'primary' | 'secondary' | 'success'
}

const CommandDescription = ({ color, className, ...props }: CommandDescriptionProps) => {
    return (
        <Aria.Text
            {...props}
            slot='description'
            className={cn(
                'sm:inline hidden text-sm ml-auto',
                color === 'danger'
                    ? 'group-data-[selected=true]:text-primary-foreground/70 text-danger/90'
                    : color === 'warning'
                      ? 'group-data-[selected=true]:text-primary-foreground/70 text-warning/90'
                      : color === 'success'
                        ? 'group-data-[selected=true]:text-primary-foreground/70 text-success/90'
                        : color === 'primary'
                          ? 'group-data-[selected=true]:text-white/70 text-primary/90'
                          : 'group-data-[selected=true]:text-primary-foreground/70 text-muted-foreground',
                className
            )}
        />
    )
}

const CommandKeyboard = (props: KeyboardProps) => (
    <Keyboard
        classNames={{
            kbd: 'lg:block hidden group-data-[selected=true]:opacity-60',
            base: '-mr-2.5'
        }}
        {...props}
    />
)

Command.Empty = CommandEmpty
Command.Input = CommandInput
Command.Item = CommandItem
Command.Keyboard = CommandKeyboard
Command.List = CommandList
Command.Section = CommandSection
Command.Separator = CommandSeparator
Command.Description = CommandDescription

export { Command }
