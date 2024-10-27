'use client'

import { IconTrendingUp } from 'cleon-icons'
import { Pie, PieChart } from 'recharts'

import {
    Card,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig
} from '@/components/ui'

const chartData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' }
]

const chartConfig = {
    visitors: {
        label: 'Visitors'
    },
    chrome: {
        label: 'Chrome',
        color: 'hsl(var(--chart-1))'
    },
    safari: {
        label: 'Safari',
        color: 'hsl(var(--chart-2))'
    },
    firefox: {
        label: 'Firefox',
        color: 'hsl(var(--chart-3))'
    },
    edge: {
        label: 'Edge',
        color: 'hsl(var(--chart-4))'
    },
    other: {
        label: 'Other',
        color: 'hsl(var(--chart-5))'
    }
} satisfies ChartConfig

export default function PieChartDonutDemo() {
    return (
        <Card className='flex flex-col'>
            <Card.Header className='items-center pb-0'>
                <Card.Title>Pie Chart - Donut</Card.Title>
                <Card.Description>January - June 2024</Card.Description>
            </Card.Header>
            <Card.Content className='flex-1 pb-0'>
                <ChartContainer
                    config={chartConfig}
                    className='mx-auto aspect-square max-h-[250px]'
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey='visitors'
                            nameKey='browser'
                            innerRadius={60}
                        />
                    </PieChart>
                </ChartContainer>
            </Card.Content>
            <Card.Footer className='flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2 font-medium leading-none'>
                    Trending up by 5.2% this month <IconTrendingUp className='h-4 w-4' />
                </div>
                <div className='leading-none text-muted-foreground'>
                    Showing total visitors for the last 6 months
                </div>
            </Card.Footer>
        </Card>
    )
}