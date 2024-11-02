'use client'

import * as React from 'react'

import {
    IconBrandLinux,
    IconChevronDown,
    IconCommand,
    IconGauge,
    IconHeadphones,
    IconLaptop,
    IconLogOut,
    IconPackage,
    IconSearch,
    IconSettings,
    IconShoppingBag,
    IconShoppingBasket
} from 'cleon-icons'
import { usePathname } from 'next/navigation'

import { CommandPalette } from '@/components/layouts/command-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar, Button, Menu, Navbar, Separator } from '@/components/ui'

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
    const isUsingIcon = usePathname().includes('navbar-05')
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <CommandPalette setOpen={setOpen} open={open} />
            <Navbar {...props}>
                <Navbar.Nav>
                    <Navbar.Logo href='/docs/components/layouts/navbar'>
                        <IconBrandLinux className='size-6 lg:size-5' />
                    </Navbar.Logo>
                    <Navbar.Section>
                        <NavbarItem isCurrent href='/blocks/navbar/navbar-01'>
                            {isUsingIcon && <IconShoppingBasket />}
                            Store
                        </NavbarItem>
                        <NavbarItem href='/blocks/navbar/navbar-02'>
                            {isUsingIcon && <IconLaptop />}
                            Mac
                        </NavbarItem>
                        <NavbarItem href='/blocks/navbar/navbar-03'>
                            {isUsingIcon && <IconPackage />}
                            iPad
                        </NavbarItem>
                        <NavbarItem href='/blocks/navbar/navbar-04'>
                            {isUsingIcon && <IconPackage />}
                            iPhone
                        </NavbarItem>
                        <NavbarItem href='/blocks/navbar/navbar-05'>
                            {isUsingIcon && <IconPackage />}
                            Watch
                        </NavbarItem>
                        <NavbarItem href='#'>Vision</NavbarItem>
                        <Navbar.Item href='#'>Entertainment</Navbar.Item>
                        <Navbar.Item href='#'>Accessories</Navbar.Item>
                        <Navbar.Item href='#'>Support</Navbar.Item>
                    </Navbar.Section>
                    <Navbar.Section className='ml-auto hidden lg:flex'>
                        <Navbar.Flex>
                            <Button
                                onPress={() => setOpen(true)}
                                variant='ghost'
                                size='icon'
                                aria-label='Search for products'
                            >
                                <IconSearch />
                            </Button>
                            <Button variant='ghost' size='icon' aria-label='Your Bag'>
                                <IconShoppingBag />
                            </Button>
                            <ThemeToggle variant='ghost' />
                        </Navbar.Flex>
                        <Separator orientation='vertical' className='h-6 ml-1 mr-3' />
                        <Menu>
                            <Menu.Trigger
                                aria-label='Open Menu'
                                className='group gap-x-2 flex items-center'
                            >
                                <Avatar
                                    alt='slash'
                                    size='sm'
                                    shape='square'
                                    src='https://github.com/dq-alhq.png'
                                />
                                <IconChevronDown className='size-4 group-pressed:rotate-180 transition-transform' />
                            </Menu.Trigger>
                            <Menu.Content placement='bottom' showArrow className='sm:min-w-56'>
                                <Menu.Section>
                                    <Menu.Header separator>
                                        <span className='block'>DQ Al-Haqqi</span>
                                        <span className='font-normal text-muted-foreground'>
                                            @dq-alhq
                                        </span>
                                    </Menu.Header>
                                </Menu.Section>

                                <Menu.Item href='#dashboard'>
                                    <IconGauge />
                                    Dashboard
                                </Menu.Item>
                                <Menu.Item href='#settings'>
                                    <IconSettings />
                                    Settings
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item>
                                    <IconCommand />
                                    Command Menu
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item href='#contact-s'>
                                    <IconHeadphones />
                                    Contact Support
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item href='#logout'>
                                    <IconLogOut />
                                    Log out
                                </Menu.Item>
                            </Menu.Content>
                        </Menu>
                    </Navbar.Section>
                </Navbar.Nav>

                <Navbar.Compact>
                    <Navbar.Flex>
                        <Navbar.Trigger className='-ml-2' />
                        <Separator orientation='vertical' className='h-6 lg:mx-1' />
                        <Navbar.Logo href='/docs/components/layouts/navbar'>
                            <IconBrandLinux className='size-5' />
                        </Navbar.Logo>
                    </Navbar.Flex>
                    <Navbar.Flex>
                        <Navbar.Flex>
                            <Button variant='ghost' size='icon' aria-label='Search for products'>
                                <IconSearch />
                            </Button>
                            <Button variant='ghost' size='icon' aria-label='Your Bag'>
                                <IconShoppingBag />
                            </Button>
                            <ThemeToggle variant='ghost' />
                        </Navbar.Flex>
                        <Separator orientation='vertical' className='h-6 ml-1 mr-3' />
                        <Menu>
                            <Menu.Trigger
                                aria-label='Open Menu'
                                className='group gap-x-2 flex items-center'
                            >
                                <Avatar
                                    alt='slash'
                                    size='sm'
                                    shape='square'
                                    src='https://github.com/dq-alhq.png'
                                />
                                <IconChevronDown className='size-4 group-pressed:rotate-180 transition-transform' />
                            </Menu.Trigger>
                            <Menu.Content placement='bottom' showArrow className='sm:min-w-56'>
                                <Menu.Section>
                                    <Menu.Header separator>
                                        <span className='block'>DQ Al-Haqqi</span>
                                        <span className='font-normal text-muted-foreground'>
                                            @dq-alhq
                                        </span>
                                    </Menu.Header>
                                </Menu.Section>

                                <Menu.Item href='#dashboard'>
                                    <IconGauge />
                                    Dashboard
                                </Menu.Item>
                                <Menu.Item href='#settings'>
                                    <IconSettings />
                                    Settings
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item>
                                    <IconCommand />
                                    Command Menu
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item href='#contact-s'>
                                    <IconHeadphones />
                                    Contact Support
                                </Menu.Item>
                                <Menu.Separator />
                                <Menu.Item href='#logout'>
                                    <IconLogOut />
                                    Log out
                                </Menu.Item>
                            </Menu.Content>
                        </Menu>
                    </Navbar.Flex>
                </Navbar.Compact>

                <Navbar.Inset>{children}</Navbar.Inset>
            </Navbar>
        </>
    )
}

function NavbarItem(props: React.ComponentProps<typeof Navbar.Item>) {
    const pathname = usePathname()
    return <Navbar.Item {...props} isCurrent={pathname === props.href} />
}
