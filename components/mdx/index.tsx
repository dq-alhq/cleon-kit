import Image from 'next/image'

import { Link, type LinkProps } from '@/components/ui'
import { useMDXComponent } from '@/lib/hooks/use-mdx'

import { BlockContent } from './block'
import { Code } from './code'
import { Demo } from './demo'
import { CLI, Installation } from './installation'
import { DocsNote } from './note'

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return (
        <Component
            components={{
                Image,
                a: (props: LinkProps) => (
                    <Link
                        target='_blank'
                        {...props}
                        className='not-prose font-medium text-primary hover:underline'
                    />
                ),
                Note: DocsNote,
                Install: Installation,
                Demo: (props: any) => <Demo className={props.className} {...props} />,
                CLI: CLI,
                Code: Code,
                Block: BlockContent
            }}
        />
    )
}
