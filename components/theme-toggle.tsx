'use client'

import React from 'react'

import { IconMoon, IconSun } from 'cleon-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui'

import { applyTheme } from './controllers/themes/controller'

export function ThemeToggle({ variant = 'outline' }: { variant?: 'outline' | 'ghost' }) {
    const { resolvedTheme, setTheme } = useTheme()

    React.useEffect(() => {
        const theme = localStorage.getItem('theme-id') || 'cleon'
        const themeContainer = document.getElementsByTagName('html')[0]
        if (themeContainer) applyTheme(themeContainer, theme, resolvedTheme as any)
    }, [resolvedTheme])

    return (
        <Button
            variant={variant}
            size='icon'
            aria-label={'Switch to ' + resolvedTheme === 'light' ? 'dark' : 'light' + 'mode'}
            onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        >
            <IconSun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <IconMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
    )
}
