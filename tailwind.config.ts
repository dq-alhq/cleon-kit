/** @type {import('tailwindcss').Config} */
import { withTV } from 'tailwind-variants/transformer'
import ta from 'tailwindcss-animate'
import trac from 'tailwindcss-react-aria-components'
import { fontFamily } from 'tailwindcss/defaultTheme'

import tt from '@tailwindcss/typography'

const config = withTV({
    content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem'
            },
            screens: {
                '2xl': '1400px'
            }
        },
        fontFamily: {
            sans: ['var(--font-sans)', ...fontFamily.sans],
            mono: ['var(--font-mono)', ...fontFamily.mono]
        },
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                danger: {
                    DEFAULT: 'hsl(var(--danger))',
                    foreground: 'hsl(var(--danger-foreground))'
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))'
                },
                info: {
                    DEFAULT: 'hsl(var(--info))',
                    foreground: 'hsl(var(--info-foreground))'
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))'
                },
                dark: {
                    DEFAULT: 'hsl(var(--dark))',
                    foreground: 'hsl(var(--dark-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [ta, tt, trac]
})

export default config
