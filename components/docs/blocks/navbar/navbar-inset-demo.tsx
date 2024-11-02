'use client'

import { IconBrandLinux, IconSearch, IconShoppingBag } from 'cleon-icons'

import { Button, Heading, Navbar } from '@/components/ui'

export default function NavbarInsetDemo() {
    return (
        <Navbar variant='inset'>
            <Navbar.Nav>
                <Navbar.Logo href='#'>
                    <IconBrandLinux className='size-5' />
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item href='#'>Store</Navbar.Item>
                    <Navbar.Item isCurrent href='#'>
                        Mac
                    </Navbar.Item>
                    <Navbar.Item href='#'>iPad</Navbar.Item>
                    <Navbar.Item href='#'>iPhone</Navbar.Item>
                </Navbar.Section>
            </Navbar.Nav>
            <Navbar.Compact>
                <Navbar.Flex>
                    <Navbar.Trigger className='-ml-2' />
                </Navbar.Flex>
                <Navbar.Flex>
                    <Navbar.Flex>
                        <Button variant='ghost' size='icon' aria-label='Search for products'>
                            <IconSearch />
                        </Button>
                        <Button variant='ghost' size='icon' aria-label='Your Bag'>
                            <IconShoppingBag />
                        </Button>
                    </Navbar.Flex>
                </Navbar.Flex>
            </Navbar.Compact>
            <Navbar.Inset>
                <Heading>Home</Heading>
            </Navbar.Inset>
        </Navbar>
    )
}
