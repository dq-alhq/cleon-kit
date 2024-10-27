'use client'

import React from 'react'

import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { copyToClipboard } from 'usemods'

import { cn } from '@/lib/utils'

import { CopyButton } from './copy-button'

export const Code = ({ lang = 'tsx', code }: { lang?: string; code: string }) => {
    const [copied, setCopied] = React.useState<boolean>(false)

    const copyCode = () => {
        copyToClipboard(code)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            })
            .catch((err: Error) => {
                console.error('Copy failed: ', err)
            })
    }

    return (
        <div className='relative border overflow-hidden rounded-lg'>
            <div className={cn('absolute bottom-auto right-4 top-3 z-20 flex gap-1.5')}>
                <CopyButton isCopied={copied} onPress={copyCode} />
            </div>
            <div className='[&_pre]:!my-0 font-mono [&_pre]:!border-0 [&_pre]:max-h-[32rem] [&_pre]:pb-[100px] no-scrollbar [&_pre]:overflow-auto [&_pre]:no-scrollbar'>
                <CodeHighlighter lang={lang} code={code} />
            </div>
        </div>
    )
}

interface CodeProps {
    lang?: string
    code: string
}

export const CodeHighlighter = ({ lang = 'tsx', code }: CodeProps) => {
    const [formattedCode, setFormattedCode] = React.useState('')
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        const processCode = async () => {
            try {
                const file = await unified()
                    .use(remarkParse)
                    .use(remarkRehype, { allowDangerousHtml: true })
                    .use(rehypePrettyCode, {
                        keepBackground: false,
                        theme: {
                            dark: 'dark-plus',
                            light: 'light-plus'
                        },
                        defaultLang: {
                            block: lang,
                            inline: 'plaintext'
                        }
                    })
                    .use(rehypeStringify, { allowDangerousHtml: true })
                    .process(`\`\`\`${lang}\n${code}\n\`\`\``)
                setFormattedCode(String(file))
            } catch (err) {
                setError('Failed to process code. Please check the configuration.')
                console.error(err)
            }
        }
        processCode()
    }, [code, lang])

    if (error) {
        return <p>Error: {error}</p>
    }

    return <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
}
