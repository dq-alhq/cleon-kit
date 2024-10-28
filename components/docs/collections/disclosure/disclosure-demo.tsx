import { Disclosure } from '@/components/ui'

export default function DisclosureDemo() {
    return (
        <Disclosure>
            <Disclosure.Trigger>What are the benefits of regular exercise?</Disclosure.Trigger>
            <Disclosure.Content>
                <p>
                    Regular exercise can improve your overall health, boost your mood, increase
                    energy levels, and help you maintain a healthy weight.
                </p>
            </Disclosure.Content>
        </Disclosure>
    )
}
