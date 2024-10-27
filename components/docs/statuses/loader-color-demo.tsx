'use client'

import { Loader } from '@/components/ui'

export default function LoaderColorDemo() {
    return (
        <div className='flex gap-6'>
            <Loader variant='spin' size='md' color='current' />
            <Loader variant='spin' size='md' color='primary' />
            <Loader variant='spin' size='md' color='secondary' />
            <Loader variant='spin' size='md' color='success' />
            <Loader variant='spin' size='md' color='warning' />
            <Loader variant='spin' size='md' color='danger' />
        </div>
    )
}
