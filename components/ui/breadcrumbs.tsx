'use client'

import { IconChevronRight, IconSlash } from 'cleon-icons'
import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Link } from './link'

const Breadcrumbs = <T extends object>({ className, ...props }: Aria.BreadcrumbsProps<T>) => {
    return <Aria.Breadcrumbs {...props} className={cn('flex items-center gap-2', className)} />
}

interface ItemProps extends Aria.BreadcrumbProps {
    href?: string
    separator?: 'slash' | 'chevron' | boolean
}

const Item = ({
    href,
    separator = true,
    className,
    ...props
}: ItemProps & Partial<Omit<Aria.LinkProps, 'className'>>) => {
    const separatorValue = separator === true ? 'chevron' : separator

    return (
        <Aria.Breadcrumb {...props} className={cn('flex text-sm items-center gap-2', className)}>
            {({ isCurrent }) => (
                <>
                    {<Link variant='unstyled' href={href} {...props} />}
                    {!isCurrent && separator !== false && <Separator separator={separatorValue} />}
                </>
            )}
        </Aria.Breadcrumb>
    )
}

const Separator = ({ separator = 'chevron' }: { separator?: ItemProps['separator'] }) => {
    return (
        <span
            className={cn(
                '[&>*]:shrink-0 [&>[data-slot=icon]]:size-3.5 [&>*]:text-muted-foreground'
            )}
        >
            {separator === 'chevron' && <IconChevronRight />}
            {separator === 'slash' && (
                <span className='text-muted-foreground'>
                    <IconSlash />
                </span>
            )}
        </span>
    )
}

Breadcrumbs.Item = Item

export { Breadcrumbs }
