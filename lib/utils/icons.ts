export function convertSvgToJsx(svgString: string): string {
    const parser = new DOMParser()
    const svgDocument = parser.parseFromString(svgString, 'image/svg+xml')
    const svgElement = svgDocument.documentElement

    function convertAttributes(node: Element): void {
        Array.from(node.attributes).forEach((attr) => {
            const camelCaseName = attr.name.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
            if (attr.name !== camelCaseName) {
                node.setAttribute(camelCaseName, attr.value)
                node.removeAttribute(attr.name)
            }
        })
    }

    function transformNode(node: Node): string {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            convertAttributes(element)
            const tagName = element.tagName.toLowerCase()
            const attributes = Array.from(element.attributes)
                .map((attr) => `${attr.name}="${attr.value}"`)
                .join(' ')
            const children = Array.from(element.childNodes).map(transformNode).join('')

            return `<${tagName}${attributes ? ' ' + attributes : ''}>${children}</${tagName}>`
        } else if (node.nodeType === Node.TEXT_NODE) {
            return (node as Text).textContent || ''
        }
        return ''
    }

    return transformNode(svgElement)
}
