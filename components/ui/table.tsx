'use client'

import React from 'react'

import { IconChevronDown, IconMenu } from 'cleon-icons'
import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

import { Checkbox } from './checkbox'

interface TableProps extends Aria.TableProps {
    className?: string
    allowResize?: boolean
}

const TableContext = React.createContext<TableProps>({
    allowResize: false
})

const useTableContext = () => React.useContext(TableContext)

const Table = ({ children, className, ...props }: TableProps) => (
    <TableContext.Provider value={props}>
        <div className='relative w-full overflow-auto'>
            {props.allowResize ? (
                <Aria.ResizableTableContainer className='overflow-auto'>
                    <Aria.Table
                        {...props}
                        className={cn(
                            'table [&_[data-drop-target]]:border [&_[data-drop-target]]:border-primary w-full caption-bottom border-spacing-0 text-sm outline-none',
                            className
                        )}
                    >
                        {children}
                    </Aria.Table>
                </Aria.ResizableTableContainer>
            ) : (
                <Aria.Table
                    {...props}
                    className={cn(
                        'table [&_[data-drop-target]]:border [&_[data-drop-target]]:border-primary w-full caption-bottom border-spacing-0 text-sm outline-none',
                        className
                    )}
                >
                    {children}
                </Aria.Table>
            )}
        </div>
    </TableContext.Provider>
)

const ColumnResizer = ({ className, ...props }: Aria.ColumnResizerProps) => (
    <Aria.ColumnResizer
        {...props}
        className={cn(
            'touch-none absolute [&[data-resizing]>div]:bg-primary right-0 top-0 bottom-0 w-px px-1 grid place-content-center [&[data-resizable-direction=both]]:cursor-ew-resize &[data-resizable-direction=left]:cursor-e-resize &[data-resizable-direction=right]:cursor-w-resize',
            className
        )}
    >
        <div className='bg-border h-full w-px py-3' />
    </Aria.ColumnResizer>
)

const Body = <T extends object>(props: Aria.TableBodyProps<T>) => (
    <Aria.TableBody {...props} className={cn('[&_.tr:last-child]:border-0')} />
)

interface TableCellProps extends Aria.CellProps {
    className?: string
}

const cellStyles = tv({
    base: 'whitespace-nowrap group px-3 py-3 outline-none',
    variants: {
        allowResize: {
            true: 'overflow-hidden truncate'
        }
    }
})
const TableCell = ({ children, className, ...props }: TableCellProps) => {
    const { allowResize } = useTableContext()
    return (
        <Aria.Cell {...props} className={cellStyles({ allowResize, className })}>
            {children}
        </Aria.Cell>
    )
}

const columnStyles = tv({
    base: 'whitespace-nowrap relative allows-sorting:cursor-pointer px-3 py-3 text-left dragging:cursor-grabbing font-medium outline-none [&:has([slot=selection])]:pr-0',
    variants: {
        isResizable: {
            true: 'overflow-hidden truncate'
        }
    }
})

interface TableColumnProps extends Aria.ColumnProps {
    className?: string
    isResizable?: boolean
}

const TableColumn = ({ children, isResizable = false, className, ...props }: TableColumnProps) => {
    return (
        <Aria.Column
            {...props}
            className={columnStyles({
                isResizable,
                className
            })}
        >
            {({ allowsSorting, sortDirection, isHovered }) => (
                <div className='flex [&_svg]:shrink-0 items-center gap-2'>
                    <>
                        {children as React.ReactNode}
                        {allowsSorting && (
                            <>
                                <span
                                    className={cn(
                                        'flex-none rounded bg-muted text-foreground [&>svg]:shrink-0 [&>svg]:size-3.5 [&>svg]:transition-transform [&>svg]:duration-200 size-[1.15rem] grid place-content-center shrink-0',
                                        isHovered ? 'bg-muted-foreground/10' : '',
                                        className
                                    )}
                                >
                                    <IconChevronDown
                                        className={
                                            sortDirection === 'ascending' ? 'rotate-180' : ''
                                        }
                                    />
                                </span>
                            </>
                        )}
                        {isResizable && <ColumnResizer />}
                    </>
                </div>
            )}
        </Aria.Column>
    )
}

interface HeaderProps<T extends object> extends Aria.TableHeaderProps<T> {
    className?: string
}

const Header = <T extends object>({ children, className, columns, ...props }: HeaderProps<T>) => {
    const { selectionBehavior, selectionMode, allowsDragging } = Aria.useTableOptions()
    return (
        <Aria.TableHeader {...props} className={cn('border-b th', className)}>
            {allowsDragging && <Aria.Column className='w-0' />}
            {selectionBehavior === 'toggle' && (
                <Aria.Column className='pl-4 w-0'>
                    {selectionMode === 'multiple' && <Checkbox slot='selection' />}
                </Aria.Column>
            )}
            <Aria.Collection items={columns}>{children}</Aria.Collection>
        </Aria.TableHeader>
    )
}

interface TableRowProps<T extends object> extends Aria.RowProps<T> {
    className?: string
}

const TableRow = <T extends object>({
    children,
    className,
    columns,
    id,
    ...props
}: TableRowProps<T>) => {
    const { selectionBehavior, allowsDragging } = Aria.useTableOptions()
    return (
        <Aria.Row
            id={id}
            {...props}
            className={cn(
                'tr group relative cursor-default border-b text-foreground/70 outline-none ring-primary focus-visible:ring-1 selected:bg-primary/40 selected:hover:bg-primary/20',
                'href' in props ? 'cursor-pointer hover:bg-secondary/50' : '',
                className
            )}
        >
            {allowsDragging && (
                <Aria.Cell className='ring-primary pr-0 group cursor-grab dragging:cursor-grabbing'>
                    <Aria.Button
                        className='relative bg-transparent pl-3.5 py-1.5 text-muted-foreground pressed:text-foreground'
                        slot='drag'
                    >
                        <IconMenu />
                    </Aria.Button>
                </Aria.Cell>
            )}
            {selectionBehavior === 'toggle' && (
                <Aria.Cell className='pl-4'>
                    <span
                        aria-hidden
                        className='absolute inset-y-0 left-0 hidden h-full w-0.5 bg-primary group-selected:block'
                    />
                    <Checkbox slot='selection' />
                </Aria.Cell>
            )}
            <Aria.Collection items={columns}>{children}</Aria.Collection>
        </Aria.Row>
    )
}

Table.Body = Body
Table.Cell = TableCell
Table.Column = TableColumn
Table.Header = Header
Table.Row = TableRow

export { Table }
