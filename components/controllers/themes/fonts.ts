import { type NextFontWithVariable } from 'next/dist/compiled/@next/font'
import localFont from 'next/font/local'

const fontGeist = localFont({
    src: '../../../app/fonts/sans/GeistVF.woff',
    variable: '--font-geist'
})
const fontInter = localFont({
    src: '../../../app/fonts/sans/Inter.woff2',
    variable: '--font-inter'
})
const fontFigtree = localFont({
    src: '../../../app/fonts/sans/Figtree.woff2',
    variable: '--font-figtree'
})
const fontNunito = localFont({
    src: '../../../app/fonts/sans/Nunito.woff2',
    variable: '--font-nunito'
})
const fontSatoshi = localFont({
    src: '../../../app/fonts/sans/Satoshi.woff2',
    variable: '--font-satoshi'
})
const fontRoboto = localFont({
    src: '../../../app/fonts/sans/Roboto.woff2',
    variable: '--font-roboto'
})
const fontRaleway = localFont({
    src: '../../../app/fonts/sans/Raleway.woff2',
    variable: '--font-raleway'
})

export type FontsSansName =
    | 'Figtree'
    | 'Satoshi'
    | 'Nunito'
    | 'Raleway'
    | 'Roboto'
    | 'Inter'
    | 'Geist'

export const FontsSans: Record<FontsSansName, NextFontWithVariable> = {
    Figtree: fontFigtree,
    Satoshi: fontSatoshi,
    Nunito: fontNunito,
    Raleway: fontRaleway,
    Roboto: fontRoboto,
    Inter: fontInter,
    Geist: fontGeist
}
