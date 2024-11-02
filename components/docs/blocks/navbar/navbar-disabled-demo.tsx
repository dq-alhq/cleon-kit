'use client'

import { IconBrandLinux } from 'cleon-icons'

import { Navbar } from '@/components/ui'

export default function NavbarDisabledDemo() {
    return (
        <Navbar>
            <Navbar.Nav>
                <Navbar.Logo href='#'>
                    <IconBrandLinux className='size-5' />
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item href='#'>Store</Navbar.Item>
                    <Navbar.Item isDisabled href='#'>
                        Mac
                    </Navbar.Item>
                    <Navbar.Item href='#'>iPad</Navbar.Item>
                    <Navbar.Item href='#'>iPhone</Navbar.Item>
                </Navbar.Section>
            </Navbar.Nav>
        </Navbar>
    )
}
