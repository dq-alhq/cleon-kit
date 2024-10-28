import { Disclosure } from '@/components/ui'

export default function DisclosureDisabledDemo() {
    return (
        <Disclosure isDisabled>
            <Disclosure.Trigger>What is your return policy?</Disclosure.Trigger>
            <Disclosure.Content>
                <p>
                    You can return any item within 30 days of purchase, provided it is in its
                    original condition with proof of purchase.
                </p>
            </Disclosure.Content>
        </Disclosure>
    )
}
