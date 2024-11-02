'use client'

import React from 'react'

import { IconBox, IconEclipse, IconHighlighter, IconLayers } from 'cleon-icons'
import { LayoutGroup, motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import type { LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { tv } from 'tailwind-variants'
import { deslugify, titleCase } from 'usemods'

import { Disclosure, DisclosureGroup } from '@/components/ui'
import { cn } from '@/lib/utils'
import { sortDocs } from '@/lib/utils/docs'
import { type Docs, docs } from '@docs'

export interface Doc {
    slug: string
    title: string
    status?: 'wip' | 'new' | 'beta' | 'help' | 'primitive' | 'alpha'
}

export interface HierarchyNode {
    [key: string]: HierarchyNode | Doc
}

export const createHierarchy = (docs: Array<Docs>): HierarchyNode => {
    const hierarchy: HierarchyNode = {}

    sortDocs(docs).forEach((doc) => {
        const parts = doc.slug.split('/').slice(1)
        let currentLevel = hierarchy

        parts.forEach((part, index) => {
            if (index === parts.length - 1) {
                // @ts-ignore
                currentLevel[part] = doc
            } else {
                if (!currentLevel[part]) {
                    currentLevel[part] = {}
                }
                currentLevel = currentLevel[part] as HierarchyNode
            }
        })
    })

    return hierarchy
}

const renderHierarchy = (node: HierarchyNode, defaultValues: string[]) => {
    const filteredNodeEntries = Object.entries(node).sort(([a], [b]) => {
        const order = ['prologue', 'getting-started', 'dark-mode', 'components']
        return order.indexOf(a) - order.indexOf(b)
    })
    return (
        <DisclosureGroup
            hideBorder
            allowsMultipleExpanded
            defaultExpandedKeys={['getting-started', 'components']}
            className='w-full flex flex-col gap-y-0.5'
        >
            {filteredNodeEntries.map(([key, value]) => (
                <Disclosure
                    className={({ isExpanded }) =>
                        cn(isExpanded && 'pb-0 [&_.icon]:text-primary [&_.icon]:fill-primary/10')
                    }
                    key={key}
                    id={key}
                >
                    <Trigger className='[&_.icon]:size-4 pl-2.5 pr-1 text-foreground'>
                        {key === 'getting-started' ? (
                            <IconLayers className='icon' />
                        ) : key === 'prologue' ? (
                            <IconHighlighter className='icon' />
                        ) : key === 'dark-mode' ? (
                            <IconEclipse className='icon' />
                        ) : (
                            <IconBox className='icon' />
                        )}
                        {titleCase(deslugify(key))}
                    </Trigger>
                    <Disclosure.Content>
                        <DisclosureGroup
                            allowsMultipleExpanded
                            hideBorder
                            defaultExpandedKeys={defaultValues}
                            className='w-full relative'
                        >
                            <div className='h-full absolute left-0 bg-muted w-px ml-4' />
                            {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
                                typeof subValue === 'object' && 'title' in subValue ? (
                                    <AsideLink
                                        className='pl-[2.1rem] flex justify-between items-center'
                                        key={subKey}
                                        href={`/${subValue.slug}`}
                                    >
                                        {(subValue as Doc).title}
                                    </AsideLink>
                                ) : (
                                    <Disclosure
                                        className={({ isExpanded }) => cn(isExpanded && 'pb-0')}
                                        key={subKey}
                                        id={subKey}
                                    >
                                        {/* Trigger components: buttons, controls, etc. */}
                                        <Trigger className='[--trigger-padding-left:2.2rem] pl-[--trigger-padding-left] pr-1'>
                                            {titleCase(deslugify(subKey))}
                                        </Trigger>
                                        <Disclosure.Content>
                                            {Object.entries(subValue as HierarchyNode).map(
                                                ([childKey, childValue]) =>
                                                    typeof childValue === 'object' &&
                                                    'title' in childValue ? (
                                                        <AsideLink
                                                            className={cn(
                                                                'ml-[-0rem] flex justify-between h-9 items-center pl-12 pr-2',
                                                                defaultValues.length > 0 && 'child'
                                                            )}
                                                            key={childKey}
                                                            href={`/${childValue.slug}`}
                                                        >
                                                            {titleCase(
                                                                deslugify((childValue as Doc).title)
                                                            )}
                                                        </AsideLink>
                                                    ) : null
                                            )}
                                        </Disclosure.Content>
                                    </Disclosure>
                                )
                            )}
                        </DisclosureGroup>
                    </Disclosure.Content>
                </Disclosure>
            ))}
        </DisclosureGroup>
    )
}

export const Aside = () => {
    const pathname = usePathname()
    const id = React.useId()
    const hierarchicalDocs = createHierarchy(docs)

    const computeDefaultValuesFromURL = (): string[] => {
        const pathParts = pathname.split('/').filter(Boolean)
        const relevantKey = pathParts[2]
        if (relevantKey) {
            return [relevantKey]
        }
        return []
    }

    const defaultValues = computeDefaultValuesFromURL()

    React.useEffect(() => {
        const activeElement = document.querySelector('.child')

        if (activeElement) {
            activeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }, [])
    return (
        <LayoutGroup id={id}>
            <aside>{renderHierarchy(hierarchicalDocs, defaultValues)}</aside>
        </LayoutGroup>
    )
}

const Trigger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <Disclosure.Trigger
            className={cn(
                'group hover:text-primary py-1.5 pressed:text-primary aria-expanded:text-primary',
                '[&_svg]:text-foreground [&_svg]:fill-foreground/10',
                '[&_svg]:hover:text-primary [&_svg]:hover:fill-primary/10',
                '[&_.indicator]:aria-expanded:text-primary [&_.indicator]:aria-expanded:fill-primary/10',
                className
            )}
        >
            {children}
        </Disclosure.Trigger>
    )
}

interface AsideLinkProps extends NextLinkProps {
    active?: boolean
    children: React.ReactNode
    className?: string
    indicatorClassName?: string
}

const asideLinkStyles = tv({
    base: 'relative block group focus:outline-none focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-primary rounded-lg pl-2.5 h-9 text-base transition-colors hover:text-primary lg:text-sm',
    variants: {
        isActive: {
            true: 'font-medium text-primary',
            false: 'text-foreground'
        }
    }
})

function AsideLink({ indicatorClassName, className, children, ...props }: AsideLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === props.href
    return (
        <Link className={asideLinkStyles({ isActive, className })} {...props}>
            {children}
            {isActive && (
                <motion.span
                    layoutId='current-indicator-sidebar'
                    className={cn(
                        'absolute inset-y-1 left-[1rem] w-0.5 rounded-full bg-primary',
                        indicatorClassName
                    )}
                />
            )}
        </Link>
    )
}
