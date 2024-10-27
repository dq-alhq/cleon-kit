'use client'

import { IconApple, IconClock, IconCut } from 'cleon-icons'

import { Tabs } from '@/components/ui'

export default function TabsIconsDemo() {
    return (
        <Tabs aria-label='Fitness App'>
            <Tabs.List>
                <Tabs.Label id='w'>
                    <IconCut /> Workouts
                </Tabs.Label>
                <Tabs.Label id='n'>
                    <IconApple /> Nutrition
                </Tabs.Label>
                <Tabs.Label id='t'>
                    <IconClock /> Tracker
                </Tabs.Label>
            </Tabs.List>
            <Tabs.Content id='w'>
                Find a variety of workout plans tailored to your fitness level and goals.
            </Tabs.Content>
            <Tabs.Content id='n'>
                Get nutrition tips and meal plans to complement your fitness journey.
            </Tabs.Content>
            <Tabs.Content id='t'>
                Track your progress with detailed statistics and analytics.
            </Tabs.Content>
        </Tabs>
    )
}
