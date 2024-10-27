'use client'

import { useState } from 'react'

import { IconCircleCheck, IconKey } from 'cleon-icons'

import { Button, Loader } from '@/components/ui'

export default function ButtonLoaderDemo() {
    const [loading, setLoading] = useState<'idle' | 'loading' | 'success'>('idle')

    const pressHandler = () => {
        setLoading('loading')

        setTimeout(() => setLoading('success'), 3000)

        setTimeout(() => setLoading('idle'), 6000)
    }

    return (
        <Button
            isPending={loading === 'loading'}
            className='w-52 justify-between'
            onPress={pressHandler}
        >
            {loading === 'success' ? (
                <IconCircleCheck />
            ) : loading === 'loading' ? (
                <Loader variant='spin' />
            ) : (
                <IconKey />
            )}
            {loading === 'loading'
                ? 'Generating Key...'
                : loading === 'success'
                  ? 'Key Generated!'
                  : 'Generate API Key'}
        </Button>
    )
}
