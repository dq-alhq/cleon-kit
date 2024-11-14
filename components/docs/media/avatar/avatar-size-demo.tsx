'use client'

import { Avatar } from '@/components/ui'

export default function AvatarSizeDemo() {
    return (
        <div className='flex gap-4'>
            <Avatar alt='avatar-sm' size='xs' src='https://github.com/dq-alhq.png' />
            <Avatar alt='avatar-sm' size='sm' src='https://github.com/dq-alhq.png' />
            <Avatar alt='avatar-md' size='md' src='https://github.com/dq-alhq.png' />
            <Avatar alt='avatar-lg' size='lg' src='https://github.com/dq-alhq.png' />
        </div>
    )
}
