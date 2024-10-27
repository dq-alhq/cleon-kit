'use client'

import * as React from 'react'

import { IconMenu, IconMinus, IconSquareHalf } from 'cleon-icons'
import type { DisclosureProps, LinkProps } from 'react-aria-components'
import {
    Button as ButtonPrimitive,
    UNSTABLE_Disclosure as Disclosure,
    UNSTABLE_DisclosurePanel as DisclosurePanel,
    Link,
    composeRenderProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn, useMediaQuery } from '@/lib/utils'

import { Button } from './button'
import { Sheet } from './sheet'
import { Tooltip } from './tooltip'

type SidebarContextProps = {
    state: 'expanded' | 'collapsed'
    open: boolean
    setOpen: (open: boolean) => void
    openMobile: boolean
    setOpenMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
    const context = React.useContext(SidebarContext)
    if (!context) {
        throw new Error('useSidebar must be used within a Sidebar.')
    }

    return context
}

const Provider = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<'div'> & {
        defaultOpen?: boolean
        isOpen?: boolean
        onOpenChange?: (open: boolean) => void
    }
>(
    (
        {
            defaultOpen = true,
            isOpen: openProp,
            onOpenChange: setOpenProp,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const isMobile = useMediaQuery('(max-width: 768px)')
        const [openMobile, setOpenMobile] = React.useState(false)

        const [_open, _setOpen] = React.useState(defaultOpen)
        const open = openProp ?? _open
        const setOpen = React.useCallback(
            (value: boolean | ((value: boolean) => boolean)) => {
                if (setOpenProp) {
                    return setOpenProp?.(typeof value === 'function' ? value(open) : value)
                }

                _setOpen(value)

                document.cookie = `sidebar:state=${open}; path=/; max-age=${60 * 60 * 24 * 7}`
            },
            [setOpenProp, open]
        )

        const toggleSidebar = React.useCallback(() => {
            return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
        }, [isMobile, setOpen, setOpenMobile])

        React.useEffect(() => {
            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
                    event.preventDefault()
                    toggleSidebar()
                }
            }

            window.addEventListener('keydown', handleKeyDown)
            return () => window.removeEventListener('keydown', handleKeyDown)
        }, [toggleSidebar])

        const state = open ? 'expanded' : 'collapsed'

        const contextValue = React.useMemo<SidebarContextProps>(
            () => ({
                state,
                open,
                setOpen,
                isMobile,
                openMobile,
                setOpenMobile,
                toggleSidebar
            }),
            [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
        )

        return (
            <SidebarContext.Provider value={contextValue}>
                <div
                    className={cn(
                        'group/sidebar-wrapper [--sidebar-width:16.5rem] [--sidebar-width-icon:3rem] flex min-h-svh w-full text-foreground dark:has-[[data-variant=inset]]:bg-background has-[[data-variant=inset]]:bg-muted/50',
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </div>
            </SidebarContext.Provider>
        )
    }
)
Provider.displayName = 'Provider'

const Inset = ({ className, ...props }: React.ComponentProps<'main'>) => {
    return (
        <main
            className={cn([
                [
                    'relative overflow-hidden flex min-h-svh flex-1 flex-col bg-background',
                    'md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:bg-background md:peer-data-[variant=inset]:rounded-xl',
                    'peer-data-[variant=inset]:overflow-hidden peer-data-[variant=inset]:border peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:my-2 md:peer-data-[variant=inset]:mr-2',
                    'md:peer-data-[variant=sidebar]:overflow-visible'
                ],
                className
            ])}
            {...props}
        />
    )
}

const Sidebar = ({
    side = 'left',
    variant = 'sidebar',
    collapsible = 'offcanvas',
    className,
    children,
    ...props
}: React.ComponentProps<'div'> & {
    side?: 'left' | 'right'
    variant?: 'sidebar' | 'floating' | 'inset'
    collapsible?: 'offcanvas' | 'dock' | 'none'
}) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === 'none') {
        return (
            <div
                className={cn(
                    'flex h-full w-[--sidebar-width] flex-col bg-background text-foreground ',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        )
    }

    if (isMobile) {
        return (
            <Sheet isOpen={openMobile} onOpenChange={setOpenMobile} {...props}>
                <Sheet.Content
                    aria-label='Sidebar'
                    data-sidebar='sidebar'
                    data-mobile='true'
                    classNames={{
                        content: 'bg-background text-foreground [&>button]:hidden'
                    }}
                    isStack={variant === 'floating'}
                    side={side}
                >
                    <Sheet.Body className='p-0 sm:p-0'>{children}</Sheet.Body>
                </Sheet.Content>
            </Sheet>
        )
    }
    return (
        <div
            className='group peer hidden md:block'
            data-state={state}
            data-collapsible={state === 'collapsed' ? collapsible : ''}
            data-variant={variant}
            data-side={side}
        >
            <div
                className={cn(
                    'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
                    'group-data-[collapsible=offcanvas]:w-0',
                    'group-data-[side=right]:rotate-180',
                    variant === 'floating' || variant === 'inset'
                        ? 'group-data-[collapsible=dock]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
                        : 'group-data-[collapsible=dock]:w-[--sidebar-width-icon]'
                )}
            />
            <div
                className={cn(
                    'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
                    side === 'left'
                        ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                        : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
                    variant === 'floating' || variant === 'inset'
                        ? 'p-2 group-data-[collapsible=dock]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
                        : 'group-data-[collapsible=dock]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
                    className
                )}
                {...props}
            >
                <div
                    data-sidebar='sidebar'
                    className={cn(
                        'flex h-full w-full flex-col bg-background group-data-[variant=inset]:bg-transparent group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-border group-data-[variant=floating]:bg-muted/50',
                        variant === 'inset' || state === 'collapsed'
                            ? '[&_[data-sidebar=header]]:border-transparent [&_[data-sidebar=footer]]:border-transparent'
                            : '[&_[data-sidebar=header]]:border-b [&_[data-sidebar=footer]]:border-t'
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

const itemStyles = tv({
    base: 'group/menu-item grid [&>[data-slot=icon]]:size-4 col-span-full [&>[data-slot=icon]]:shrink-0 items-center [&>[data-slot=icon]]:text-muted-foreground relative rounded-lg lg:text-sm leading-6',
    variants: {
        collapsed: {
            true: [
                'justify-start px-3 [&>[data-slot=icon]]:mr-2 py-2 col-span-full',
                'md:place-content-center md:grid-cols-[auto] md:[&>[data-slot=icon]]:mr-0 md:px-0 md:py-0 md:size-9'
            ],
            false: 'grid-cols-subgrid [&>[data-slot=icon]]:mr-2 px-3 py-2'
        },
        isFocused: {
            true: 'outline-none'
        },
        isFocusVisible: {
            true: 'bg-muted [&:focus-visible_[slot=label]]:text-accent-foreground [&:focus-visible_[slot=description]]:text-accent-foreground/70 text-muted-foreground'
        },
        isHovered: {
            true: [
                'bg-muted [&:focus-visible_[slot=label]]:text-accent-foreground [&:focus-visible_[slot=description]]:text-accent-foreground/70 text-muted-foreground [&_.text-muted-foreground]:text-muted-foreground/80'
            ]
        },
        isCurrent: {
            true: [
                '[&_[data-slot=icon]]:text-accent-foreground [&_[data-slot=label]]:text-accent-foreground [&_.text-muted-foreground]:text-accent-foreground/80 bg-accent text-accent-foreground',
                '[&_.bdx]:bg-accent-foreground/20 [&_.bdx]:ring-accent-foreground/30'
            ]
        },
        isDisabled: {
            true: 'opacity-70 cursor-default text-muted-foreground'
        }
    }
})

interface ItemProps extends LinkProps {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    badge?: string | number | undefined
    isCurrent?: boolean
}

const Item = ({ isCurrent, children, className, icon: Icon, ...props }: ItemProps) => {
    const { state, isMobile } = React.useContext(SidebarContext)!
    return (
        <Link
            data-sidebar='menu-item'
            aria-current={isCurrent ? 'page' : undefined}
            className={composeRenderProps(className, (className, renderProps) =>
                itemStyles({
                    ...renderProps,
                    collapsed: state === 'collapsed',
                    isCurrent,
                    className
                })
            )}
            {...props}
        >
            {(values) => (
                <>
                    {Icon && (
                        <>
                            {state === 'collapsed' && !isMobile ? (
                                <Tooltip closeDelay={0} delay={0}>
                                    <Tooltip.Trigger className='focus:outline-none size-full absolute inset-0 grid place-content-center'>
                                        {<Icon data-slot='icon' />}
                                        <span className='sr-only'>{children as string}</span>
                                    </Tooltip.Trigger>
                                    <Tooltip.Content
                                        variant='inverse'
                                        showArrow={false}
                                        placement='right'
                                    >
                                        {children as string}
                                    </Tooltip.Content>
                                </Tooltip>
                            ) : (
                                <Icon data-slot='icon' />
                            )}
                        </>
                    )}
                    <span className='col-start-2 group-data-[collapsible=dock]:hidden'>
                        {typeof children === 'function' ? children(values) : children}
                        {props.badge && (
                            <div className='bdx h-[1.30rem] px-1 rounded-md text-muted-foreground text-xs font-medium ring-1 ring-foreground/20 grid place-content-center w-auto inset-y-1/2 -translate-y-1/2 absolute right-1.5 bg-foreground/[0.02] dark:bg-foreground/10'>
                                {props.badge}
                            </div>
                        )}
                    </span>
                </>
            )}
        </Link>
    )
}

const Content = ({ className, ...props }: React.ComponentProps<'div'>) => {
    return (
        <div
            data-sidebar='content'
            className={cn([
                'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=dock]:items-center group-data-[collapsible=dock]:overflow-hidden [&>section+section]:mt-8',
                className
            ])}
            {...props}
        />
    )
}

const Trigger = ({ className, onPress, ...props }: React.ComponentProps<typeof Button>) => {
    const { toggleSidebar } = useSidebar()
    return (
        <Button
            aria-label={props['aria-label'] || 'Toggle Sidebar'}
            data-sidebar='trigger'
            variant='ghost'
            size='icon'
            className={className}
            onPress={(event) => {
                onPress?.(event)
                toggleSidebar()
            }}
            {...props}
        >
            <IconSquareHalf className='md:inline hidden' />
            <IconMenu className='md:hidden inline' />
            <span className='sr-only'>Toggle Sidebar</span>
        </Button>
    )
}

const header = tv({
    base: 'flex flex-col [&>section+section]:mt-2.5',
    variants: {
        collapsed: {
            false: 'px-5 py-4',
            true: 'px-5 py-4 md:p-0 md:size-9 mt-1 group-data-[variant=floating]:mt-2 md:rounded-lg md:hover:bg-muted md:mx-auto md:justify-center md:items-center'
        }
    }
})

const Header = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    const { state } = React.useContext(SidebarContext)!
    return (
        <div
            data-sidebar='header'
            {...props}
            className={header({ collapsed: state === 'collapsed', className })}
            {...props}
        />
    )
}

const footer = tv({
    base: 'flex flex-col mt-auto [&>section+section]:mt-2.5',
    variants: {
        collapsed: {
            false: [
                'p-2 [&_[slot=menu-trigger]>[data-slot=avatar]]:-ml-1.5 [&_[slot=menu-trigger]]:w-full [&_[slot=menu-trigger]]:hover:bg-muted [&_[slot=menu-trigger]]:justify-start [&_[slot=menu-trigger]]:flex [&_[slot=menu-trigger]]:items-center'
            ],
            true: 'size-12 p-1 [&_[slot=menu-trigger]]:size-9 justify-center items-center'
        }
    }
})

const Footer = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    const { state } = React.useContext(SidebarContext)!
    return (
        <div
            {...props}
            data-sidebar='footer'
            className={footer({ collapsed: state === 'collapsed', className })}
            {...props}
        />
    )
}

interface CollapsibleProps extends DisclosureProps {
    children: React.ReactNode
    title?: string
    collapsible?: boolean
    defaultExpanded?: boolean
}

const Section = ({
    title,
    className,
    collapsible,
    defaultExpanded,
    ...props
}: CollapsibleProps) => {
    const isExpanded = title ? (collapsible ? (defaultExpanded ?? true) : true) : true

    const { state } = React.useContext(SidebarContext)!
    return (
        <Disclosure className={cn('p-2', className)} defaultExpanded={isExpanded} {...props}>
            {({ isExpanded }) => (
                <>
                    {typeof title === 'string' && (
                        <span className='group-data-[collapsible=dock]:opacity-0 group-data-[collapsible=dock]:hidden'>
                            {collapsible ? (
                                <ButtonPrimitive
                                    slot='trigger'
                                    className='w-full focus:outline-none flex items-center justify-between text-sm text-muted-foreground px-3 py-2 has-[.indicator]:pr-0'
                                >
                                    {title}
                                    <div
                                        className={cn(
                                            'relative flex items-center transition pr-0 duration-300 justify-center size-3 indicator',
                                            !isExpanded ? '-rotate-90' : 'rotate-0'
                                        )}
                                    >
                                        <IconMinus
                                            className={cn(
                                                'transition absolute duration-300 size-3'
                                            )}
                                        />
                                        <IconMinus
                                            className={cn(
                                                'transition absolute duration-300 size-3',
                                                !isExpanded ? '-rotate-90' : 'rotate-0'
                                            )}
                                        />
                                    </div>
                                </ButtonPrimitive>
                            ) : (
                                <h4 className='text-sm text-muted-foreground px-3 py-2'>{title}</h4>
                            )}
                        </span>
                    )}
                    <DisclosurePanel>
                        <div
                            className={cn(
                                'grid gap-y-0.5 group-data-[collapsible=dock]:place-content-center',
                                state === 'collapsed'
                                    ? 'group-data-[collapsible=dock]:place-content-center'
                                    : 'grid-cols-[auto_1fr]'
                            )}
                        >
                            {props.children}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}

const Rail = ({ className, ...props }: React.ComponentProps<'button'>) => {
    const { toggleSidebar } = useSidebar()

    return (
        <button
            data-sidebar='rail'
            aria-label='Toggle Sidebar'
            tabIndex={-1}
            onClick={toggleSidebar}
            title='Toggle Sidebar'
            className={cn(
                'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-transparent group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
                '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
                '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
                'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-background',
                '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
                '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
                className
            )}
            {...props}
        />
    )
}

Sidebar.Provider = Provider
Sidebar.Inset = Inset
Sidebar.Header = Header
Sidebar.Content = Content
Sidebar.Footer = Footer
Sidebar.Item = Item
Sidebar.Section = Section
Sidebar.Rail = Rail
Sidebar.Trigger = Trigger

export { Sidebar, useSidebar }
