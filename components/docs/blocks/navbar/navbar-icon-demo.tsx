'use client'

import {
    IconBrandCleon,
    IconBrandGithub,
    IconBrandLinux,
    IconChevronDown,
    IconCommand,
    IconGauge,
    IconHeadphones,
    IconLogOut,
    IconNotebook,
    IconPanelLeftOpen,
    IconSearch,
    IconSettings,
    IconShoppingBag,
    IconSwatchBook
} from 'cleon-icons'

import { Avatar, Button, Menu, Navbar, Separator } from '@/components/ui'

export default function NavbarIconDemo() {
    return (
        <Navbar>
            <Navbar.Nav>
                <Navbar.Logo href='/docs/components/layouts/navbar'>
                    <IconBrandCleon className='size-5' />
                    <strong className='font-semibold'>Cleon</strong>
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item href='/docs/components/layouts/navbar'>
                        <IconNotebook />
                        Documentation
                    </Navbar.Item>
                    <Navbar.Item href='/docs/components/layouts/sidebar'>
                        <IconPanelLeftOpen /> Sidebar
                    </Navbar.Item>
                    <Navbar.Item href='/themes'>
                        <IconSwatchBook /> Themes
                    </Navbar.Item>
                    <Navbar.Item href='https://github.com/dq-alhq/cleon-ui'>
                        <IconBrandGithub /> Github
                    </Navbar.Item>
                </Navbar.Section>
            </Navbar.Nav>
            <Navbar.Compact>
                <Navbar.Flex>
                    <Navbar.Trigger className='-ml-2' />
                    <Separator orientation='vertical' className='h-6 mx-2' />
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
                            <Menu.Item href='#contact-support'>
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
        </Navbar>
    )
}
