import * as React from 'react'

import { cn } from '@/lib/utils'

const DescriptionList = ({ className, ...props }: React.ComponentPropsWithoutRef<'dl'>) => (
    <dl
        {...props}
        className={cn(
            'grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6',
            className
        )}
    />
)

const DescriptionTerm = ({ className, ...props }: React.ComponentPropsWithoutRef<'dt'>) => (
    <dt
        {...props}
        className={cn(
            'col-start-1 border-t pt-3 text-muted-foreground first:border-none sm:py-3',
            className
        )}
    />
)

const DescriptionDetails = ({ className, ...props }: React.ComponentPropsWithoutRef<'dd'>) => (
    <dd
        {...props}
        className={cn(
            'pb-3 pt-1 text-foreground sm:border-t sm:py-3 sm:[&:nth-child(2)]:border-none',
            className
        )}
    />
)

DescriptionList.Term = DescriptionTerm
DescriptionList.Details = DescriptionDetails
export { DescriptionList }
