'use client'

import { IconPhone } from 'cleon-icons'

import TimeFieldDemo from '@/components/docs/date-and-time/time-field/time-field-demo'
import DropZoneAndFileTriggerDemo from '@/components/docs/drag-and-drop/drop-zone-and-file-trigger-demo'
import TextareaDemo from '@/components/docs/forms/textarea/textarea-demo'
import { Avatar, Card, DatePicker, Heading, NumberField, Tabs, TextField } from '@/components/ui'

export default function UserProfileSink() {
    return (
        <Card className='p-2'>
            <div className='flex flex-col w-full'>
                <img
                    width={320}
                    height={240}
                    className='h-40 object-cover w-full rounded-md'
                    src='https://picsum.photos/640/320'
                    alt='Profile Cover'
                />
                <div className='flex flex-col flex-shrink-0 items-center w-full mx-auto -mt-20 mb-3'>
                    <Avatar
                        src='https://github.com/dq-alhq.png'
                        initials='DQ'
                        className='!size-32'
                    />
                    <div className='flex flex-col items-center text-center mt-2'>
                        <Heading level={3}>Diqi Al-Haqqi</Heading>
                        <Heading level={4} className='text-muted-foreground'>
                            Developer
                        </Heading>
                    </div>
                </div>
                <div className='border rounded-lg p-2'>
                    <Tabs aria-label='Packages'>
                        <Tabs.List className='w-full justify-center'>
                            <Tabs.Label id='t1'>Identity</Tabs.Label>
                            <Tabs.Label id='t2'>Address</Tabs.Label>
                            <Tabs.Label id='t3'>Upload Files</Tabs.Label>
                        </Tabs.List>
                        <Tabs.Content id='t1'>
                            <div className='w-full items-end flex gap-3 mb-7'>
                                <DatePicker label='Birthdate' className='w-full' />
                                <TimeFieldDemo />
                            </div>
                            <div>
                                <TextField label='Phone' prefix='+62 ' suffix={<IconPhone />} />
                            </div>
                        </Tabs.Content>
                        <Tabs.Content id='t2'>
                            <TextareaDemo />
                            <div className='mt-2'>
                                <NumberField label='Postal Code' />
                            </div>
                        </Tabs.Content>
                        <Tabs.Content id='t3' className='w-full flex justify-center pb-1.5'>
                            <DropZoneAndFileTriggerDemo />
                        </Tabs.Content>
                    </Tabs>
                </div>
            </div>
        </Card>
    )
}
