'use client'

import { toast } from 'sonner'

import { Button } from '@/components/ui'

export default function ToastStatusDemo() {
    return (
        <div className='flex flex-wrap gap-3'>
            <Button variant='outline' onPress={() => toast.error('The registration failed')}>
                Error
            </Button>
            <Button
                variant='outline'
                onPress={() => toast.success('The registration was successful.')}
            >
                Success
            </Button>
            <Button
                variant='outline'
                onPress={() => toast.warning('There was an issue during registration')}
            >
                Warning
            </Button>
            <Button variant='outline' onPress={() => toast.info('Email is already registered.')}>
                Info
            </Button>
            <Button
                variant='outline'
                onPress={() => {
                    toast.promise(wait(2000), {
                        loading: 'Deleting database...',
                        success: 'Database deleted.',
                        error: 'Failed to delete database.'
                    })
                }}
            >
                Promise / Loading
            </Button>
        </div>
    )
}

function wait(number: number) {
    return new Promise((resolve) => setTimeout(resolve, number))
}
