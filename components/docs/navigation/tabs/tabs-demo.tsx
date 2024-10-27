'use client'

import { Tabs } from '@/components/ui'

export default function TabsDemo() {
    return (
        <Tabs aria-label='Recipe App'>
            <Tabs.List>
                <Tabs.Label id='r'>Recipes</Tabs.Label>
                <Tabs.Label id='i'>Ingredients</Tabs.Label>
                <Tabs.Label id='m'>Meal Plans</Tabs.Label>
                <Tabs.Label id='v'>Videos</Tabs.Label>
            </Tabs.List>
            <Tabs.Content id='r'>
                Browse through a wide selection of recipes for all occasions and dietary
                preferences.
            </Tabs.Content>
            <Tabs.Content id='i'>
                Check the list of ingredients needed for your chosen recipes.
            </Tabs.Content>
            <Tabs.Content id='m'>
                Discover curated meal plans to simplify your weekly cooking.
            </Tabs.Content>
            <Tabs.Content id='v'>
                Watch cooking videos to learn new techniques and recipes.
            </Tabs.Content>
        </Tabs>
    )
}
