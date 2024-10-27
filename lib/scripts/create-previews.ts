// @ts-nocheck
import * as fs from 'fs'
import * as path from 'path'

const baseDir = path.resolve(__dirname, '../../components')
const docsDir = path.join(baseDir, 'docs')
const uiDir = path.join(baseDir, 'ui')
const outputMapFilePath = path.resolve(docsDir, 'generated/previews.ts')
const jsonOutputFilePath = path.resolve(docsDir, 'generated/previews.json')

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    // Exclude directories: 'rehype' in 'docs' and 'outside' in base directory
    if (dirPath.endsWith(path.join('docs', 'rehype')) || dirPath.endsWith('outside')) {
        return arrayOfFiles // Skip these directories and their contents
    }

    const files = fs.readdirSync(dirPath)
    files.forEach((file) => {
        const filePath = path.join(dirPath, file)
        if (fs.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles)
        } else if (file.endsWith('.tsx')) {
            arrayOfFiles.push(filePath)
        }
    })
    return arrayOfFiles
}

const components = [...getAllFiles(docsDir), ...getAllFiles(uiDir)]
    .filter((filePath) => !filePath.includes('/how') && !filePath.includes('/props')) // Exclude specific components
    .reduce(
        (acc, filePath) => {
            const content = fs.readFileSync(filePath, 'utf8') // Read the file content
            const relativePath = path
                .relative(baseDir, filePath)
                .replace(/\\/g, '/')
                .replace('.tsx', '')
            const importPath = `@/components/${relativePath}`
            const key = relativePath.split('/').slice(1).join('/')
            const type = filePath.startsWith(docsDir) ? 'docs' : 'ui' // Determine type based on folder path

            if (type === 'docs') {
                acc.tsComponents[key] = {
                    component: importPath
                }
            }

            acc.jsonComponents[key] = {
                component: importPath,
                raw: content,
                type: type // Include type for JSON only
            }

            return acc
        },
        { tsComponents: {}, jsonComponents: {} }
    )

let previewsContent = '// @ts-nocheck\n'
previewsContent += '// This file is autogenerated by scripts/create-pr-content.ts.\n'
previewsContent += '// Do not edit this file directly.\n\n'
previewsContent += "import React from 'react';\n\n"
previewsContent += 'export const previews: Record<string, any> = {\n'
Object.entries(components.tsComponents).forEach(([key, { component }]) => {
    previewsContent += `  "${key}": {\n`
    previewsContent += `    component: React.lazy(() => import("${component}")),\n`
    previewsContent += `  },\n`
})
previewsContent += '};\n'
fs.writeFileSync(outputMapFilePath, previewsContent)
console.log(`Component map generated into ${outputMapFilePath}`)

fs.writeFileSync(jsonOutputFilePath, JSON.stringify(components.jsonComponents, null, 2))
console.log(`Component JSON generated into ${jsonOutputFilePath}`)
