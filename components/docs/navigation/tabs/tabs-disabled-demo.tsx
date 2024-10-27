'use client'

import { Tabs } from '@/components/ui'

export default function TabsDisabledDemo() {
    return (
        <Tabs disabledKeys={['c', 'a']} aria-label='Services'>
            <Tabs.List>
                <Tabs.Label id='o'>Overview</Tabs.Label>
                <Tabs.Label id='c'>Contact</Tabs.Label>
                <Tabs.Label id='a'>About Us</Tabs.Label>
            </Tabs.List>
            <Tabs.Content id='o'>
                Welcome to our service! Here, you’ll find a brief overview of what we offer, our
                mission, and how we strive to provide value to our customers.
            </Tabs.Content>
            <Tabs.Content id='c'>
                Get in touch with us through our contact page. We are here to help you with any
                inquiries, support requests, or feedback you may have.
            </Tabs.Content>
            <Tabs.Content id='a'>
                Learn more about our company, our history, and the team behind our success. We are
                dedicated to delivering the best service to our customers.
            </Tabs.Content>
        </Tabs>
    )
}
