export interface ColorShade {
    shade: string
    color: string
}

export interface ColorItemProps {
    name: string
    children: ColorShade[]
}
