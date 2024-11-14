'use client'

import { Presets } from './theme-presets'

export const applyTheme = (
    themeContainer: HTMLHtmlElement,
    theme: string,
    resolvedTheme: 'dark' | 'light'
) => {
    const themeVariables = resolvedTheme === 'dark' ? Presets[theme].dark : Presets[theme].light
    Object.keys(themeVariables).forEach((key) => {
        themeContainer.style.setProperty(key, themeVariables[key as keyof typeof themeVariables])
    })
    themeContainer.style.setProperty(
        '--radius',
        `${Presets[theme].radius ?? Presets.cleon.radius}rem`
    )
}

export const applyCustomTheme = (
    themeContainer: HTMLHtmlElement,
    lightVars: Record<string, string>,
    darkVars: Record<string, string>,
    radius: number,
    resolvedTheme: 'dark' | 'light'
) => {
    themeContainer.style.setProperty('--radius', `${radius}rem`)
    Object.keys(resolvedTheme === 'dark' ? darkVars : lightVars).forEach((key) => {
        themeContainer.style.setProperty(
            key,
            resolvedTheme === 'dark'
                ? darkVars[key as keyof typeof darkVars]
                : lightVars[key as keyof typeof lightVars]
        )
    })
}
