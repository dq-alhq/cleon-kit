'use client'

import { IconChevronRight } from 'cleon-icons'
import * as Aria from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Link } from './link'

const Breadcrumbs = <T extends object>({ className, ...props }: Aria.BreadcrumbsProps<T>) => {
    return <Aria.Breadcrumbs {...props} className={cn('flex gap-1', className)} />
}

const Item = ({ className, ...props }: Aria.BreadcrumbProps & Aria.LinkProps) => {
    return (
        <Aria.Breadcrumb {...props} className={cn('flex items-center gap-1', className)}>
            <Link href={props.href} {...props} />
            {'href' in props && (
                <IconChevronRight className='size-4 shrink-0 text-muted-foreground' />
            )}
        </Aria.Breadcrumb>
    )
}

Breadcrumbs.Item = Item

export { Breadcrumbs }
