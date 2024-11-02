'use client'

import React from 'react'

import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn } from 'cleon-icons'
import { toast } from 'sonner'

import { Description, Menu } from '@/components/ui'
import { cn, wait } from '@/lib/utils'

import { CopyButton } from './copy-button'

interface CLIProps {
    items?: string | string[]
    command: 'init' | 'add' | 'install'
    message?: string
    noMessage?: boolean
    className?: string
}

export const CLI = ({ items, message, command = 'init', noMessage, className }: CLIProps) => {
    const getCommand = (pm: string) => {
        const item = typeof items === 'string' ? items : items?.join(' ')
        switch (pm) {
            case 'bun':
                return command === 'init'
                    ? 'bunx cleon init'
                    : command === 'add'
                      ? `bunx cleon add ${item}`
                      : `bun add ${item}`
            case 'yarn':
                return command === 'init'
                    ? 'npx cleon init'
                    : command === 'add'
                      ? `npx cleon add ${item}`
                      : `yarn add ${item}`
            case 'pnpm':
                return command === 'init'
                    ? 'pnpm dlx cleon init'
                    : command === 'add'
                      ? `pnpm dlx cleon add ${item}`
                      : `pnpm add ${item}`
            case 'npm':
            default:
                return command === 'init'
                    ? 'npx cleon init'
                    : command === 'add'
                      ? `npx cleon add ${item}`
                      : `npm i ${item}`
        }
    }

    const [cli, setCli] = React.useState(getCommand('npm'))
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async (pm: string) => {
        setCli(getCommand(pm))
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(cli)
            setCopied(true)
            wait(2000).then(() => setCopied(false))
        } else {
            toast.error('Failed to copy to clipboard')
        }
    }

    return (
        <section className='space-y-2'>
            {!noMessage && (
                <Description className='text-base max-w-none'>
                    {message ? message : 'In the terminal, run the following command to begin:'}
                </Description>
            )}
            <div
                className={cn(
                    'text-foreground bg-background font-mono gap-4 text-sm border flex items-center justify-between p-3 rounded-lg w-full h-12',
                    className
                )}
            >
                {cli}
                <Menu>
                    <CopyButton isCopied={copied} />
                    <Menu.Content showArrow placement='bottom end'>
                        <Menu.Item onAction={() => handleCopy('npm')}>
                            <IconBrandNpm />
                            NPM
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('bun')}>
                            <IconBrandBun />
                            Bun
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('yarn')}>
                            <IconBrandYarn />
                            Yarn
                        </Menu.Item>
                        <Menu.Item onAction={() => handleCopy('pnpm')}>
                            <IconBrandPnpm />
                            PNPM
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </div>
        </section>
    )
}
