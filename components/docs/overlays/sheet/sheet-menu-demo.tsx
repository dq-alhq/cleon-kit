'use client'

import React from 'react'

import {
    IconBook,
    IconBookOpen,
    IconBrandGithub,
    IconBrandGithubCopilot,
    IconBuilding,
    IconChartBar,
    IconFileCode,
    IconFilter,
    IconGlobe,
    IconHeart,
    IconLogOut,
    IconMessage,
    IconSettings,
    IconStar,
    IconUser,
    IconUsers
} from 'cleon-icons'
import { Group, Menu as MenuPrimitive } from 'react-aria-components'

import {
    Avatar,
    Button,
    Checkbox,
    Description,
    Menu,
    Modal,
    Select,
    Sheet,
    TextField
} from '@/components/ui'

export default function SheetMenuDemo() {
    const [isOpen, setIsOpen] = React.useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <>
            <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Header>
                    <Modal.Title>Edit status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='space-y-4'>
                        <TextField
                            prefix={<IconBrandGithub />}
                            label='Status'
                            placeholder="What's your status?"
                        />
                        <Group>
                            <Checkbox>Busy</Checkbox>
                            <Description>
                                When others mention you, assign you, or request your review, GitHub
                                will let them know that you have limited availability.
                            </Description>
                        </Group>
                        <Select label='Clear Status'>
                            <Select.Item>Never</Select.Item>
                            <Select.Item>in 30 Minutes</Select.Item>
                            <Select.Item>in 1 Hour</Select.Item>
                            <Select.Item>in 8 Hours</Select.Item>
                            <Select.Item>after Today</Select.Item>
                            <Select.Item>after a Week</Select.Item>
                            <Select.Item>after a Month</Select.Item>
                        </Select>
                        <Select label='Visible to'>
                            <Select.Item>Everyone</Select.Item>
                            <Select.Item>Organization</Select.Item>
                            <Select.Item>Public</Select.Item>
                        </Select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Close>Clear Status</Modal.Close>
                    <Button onPress={closeModal}>Set Status</Button>
                </Modal.Footer>
            </Modal.Content>
            <Sheet>
                <Sheet.Trigger aria-label='Open menu'>
                    <Avatar src='https://github.com/dq-alhq.png' alt='dq-alhq' />
                </Sheet.Trigger>
                <Sheet.Content closeButton={false}>
                    <Sheet.Header className='flex border-b p-4 sticky top-0 bg-overlay flex-row items-center gap-x-3 mb-2'>
                        <Avatar src='https://github.com/dq-alhq.png' alt='dq-alhq' />
                        <div>
                            <Sheet.Title>dq-alhq</Sheet.Title>
                            <Sheet.Description>DQ Al-Haqqi</Sheet.Description>
                        </div>
                    </Sheet.Header>
                    <Sheet.Body className='px-0 sm:px-0'>
                        <MenuPrimitive className='divide-y [&_.xss3]:p-2'>
                            <Menu.Section>
                                <Menu.Item onAction={openModal}>
                                    <IconBrandGithub />
                                    Edit Status
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.Item>
                                    <IconUser />
                                    Your profile
                                </Menu.Item>
                                <Menu.Item>
                                    <IconBook /> Your repositories
                                </Menu.Item>
                                <Menu.Item>
                                    <IconBrandGithubCopilot /> Your Copilot
                                </Menu.Item>
                                <Menu.Item>
                                    <IconChartBar /> Your projects
                                </Menu.Item>
                                <Menu.Item>
                                    <IconStar /> Your stars
                                </Menu.Item>
                                <Menu.Item>
                                    <IconFileCode /> Your gists
                                </Menu.Item>
                                <Menu.Item>
                                    <IconBuilding /> Your organizations
                                </Menu.Item>
                                <Menu.Item>
                                    <IconGlobe /> Your enterprises
                                </Menu.Item>
                                <Menu.Item>
                                    <IconHeart />
                                    Your sponsors
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.Item>
                                    <IconFilter /> Feature preview
                                </Menu.Item>
                                <Menu.Item>
                                    <IconSettings />
                                    Settings
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.Item>
                                    <IconBookOpen /> GitHub Docs
                                </Menu.Item>
                                <Menu.Item>
                                    <IconUsers /> GitHub Support
                                </Menu.Item>
                                <Menu.Item>
                                    <IconMessage /> GitHub Community
                                </Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.Item>
                                    <IconLogOut /> Sign out
                                </Menu.Item>
                            </Menu.Section>
                        </MenuPrimitive>
                    </Sheet.Body>
                </Sheet.Content>
            </Sheet>
        </>
    )
}
