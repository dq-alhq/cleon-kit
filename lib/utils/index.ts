import React from 'react'

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const useMediaQuery = (query: string) => {
    const [value, setValue] = React.useState(false)

    React.useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches)
        }

        const result = matchMedia(query)
        result.addEventListener('change', onChange)
        setValue(result.matches)

        return () => result.removeEventListener('change', onChange)
    }, [query])

    return value
}

export const getInitials = (str: string): string =>
    str
        .split(' ')
        .slice(0, 2)
        .map((part) => part.charAt(0))
        .join('')

export const wait = (number: number = 1000) => new Promise((resolve) => setTimeout(resolve, number))

export const formatDate = (input: string | number): string => {
    const date = new Date(input)
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}
export const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
}
