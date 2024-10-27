'use client'

import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

const linkStyles = tv({
    base: 'relative focus-visible:outline-2 outline outline-offset-2 disabled:focus-visible:outline-0 outline-0 outline-primary disabled:opacity-60 border-transparent transition-colors disabled:cursor-default',
    variants: {
        variant: {
            default: 'text-foreground hover:text-primary',
            unstyled: 'text-current',
            primary: 'text-primary hover:text-primary/80',
            danger: 'text-danger hover:text-danger/80'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

interface LinkProps extends Aria.LinkProps {
    variant?: 'primary' | 'danger' | 'default' | 'unstyled'
}

const Link = ({ className, ...props }: LinkProps) => {
    return (
        <Aria.Link
            {...props}
            className={Aria.composeRenderProps(className, (className, ...renderProps) =>
                linkStyles({ ...renderProps, variant: props.variant, className })
            )}
        >
            {(values) => (
                <>
                    {typeof props.children === 'function' ? props.children(values) : props.children}
                </>
            )}
        </Aria.Link>
    )
}

export { Link, type LinkProps }
