import { slugify } from 'usemods'

import { type Docs } from '@docs'

export const sortDocs = (docs: Array<Docs>) => docs.sort((a, b) => a.order - b.order)

export const getAllRefs = (docs: Array<Docs>) => {
    const references: Record<string, number> = {}
    docs.forEach((doc) => {
        if (doc.published) {
            doc.references?.forEach((tag: string) => {
                references[tag] = (references[tag] ?? 0) + 1
            })
        }
    })

    return references
}

export function getDocsByTagReferences(docs: Array<Docs>, tag: string) {
    return docs.filter((doc) => {
        if (!doc.references) return false
        const slugifiedTags = doc.references.map((tag: string) => slugify(tag))
        return slugifiedTags.includes(tag)
    })
}

export function extractJSX(code: string) {
    const match = code.match(/return\s*(\([^]*?\)|.*?);?\s*}/)
    if (match && match[1]) {
        const jsx = match[1].replace(/^\(|\)$/g, '').trim()
        const lines = jsx.split('\n')

        if (lines.length === 1) {
            return jsx
        }

        return lines
            .map((line) => {
                // @ts-ignore
                const indent = line.match(/^\s*/)[0]
                return indent.slice(4) + line.trim()
            })
            .join('\n')
            .trim()
    }
    return null
}

export function extractImports(code: string) {
    const importRegex = /^(import\s+(?:\{[^}]*}|[^;]+)\s*from\s*['"][^'"]+['"]\s*;?)$/gm
    const matches = code.match(importRegex)
    return matches ? matches.join('\n') : ''
}
