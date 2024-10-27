'use client'

import { Avatar } from '@/components/ui'

export default function AvatarSizeDemo() {
    return (
        <div className='flex gap-4'>
            <Avatar alt='dq sm' size='sm' src='https://github.com/dq-alhq.png' />
            <Avatar alt='dq md' size='md' src='https://github.com/dq-alhq.png' />
            <Avatar alt='dq lg' size='lg' src='https://github.com/dq-alhq.png' />
        </div>
    )
}
