'use client'

import { IconDesktop, IconMobile, IconTrendingUp } from 'cleon-icons'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
    Card,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig
} from '@/components/ui'

const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 }
]

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))',
        icon: IconDesktop
    },
    mobile: {
        label: 'Mobile',
        color: 'hsl(var(--chart-2))',
        icon: IconMobile
    }
} satisfies ChartConfig

export default function AreaChartIconsDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Area Chart - Icons</Card.Title>
                <Card.Description>
                    Showing total visitors for the last 6 months
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator='line' />}
                        />
                        <Area
                            dataKey='mobile'
                            type='natural'
                            fill='var(--color-mobile)'
                            fillOpacity={0.4}
                            stroke='var(--color-mobile)'
                            stackId='a'
                        />
                        <Area
                            dataKey='desktop'
                            type='natural'
                            fill='var(--color-desktop)'
                            fillOpacity={0.4}
                            stroke='var(--color-desktop)'
                            stackId='a'
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </Card.Content>
            <Card.Footer>
                <div className='flex w-full items-start gap-2 text-sm'>
                    <div className='grid gap-2'>
                        <div className='flex items-center gap-2 font-medium leading-none'>
                            Trending up by 5.2% this month{' '}
                            <IconTrendingUp className='size-4' />
                        </div>
                        <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                            January - June 2024
                        </div>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
}