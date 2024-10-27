'use client'

import { Avatar } from '@/components/ui'

export default function AvatarStatusDemo() {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex justify-center gap-2'>
                <Avatar status='success' initials='DQ' src='https://i.pravatar.cc/150?img=58' />
                <Avatar
                    shape='square'
                    status='success'
                    initials='DQ'
                    src='https://i.pravatar.cc/150?img=57'
                />
            </div>
            <div className='flex justify-center gap-2'>
                <Avatar status='primary' initials='DQ' src='https://i.pravatar.cc/150?img=63' />
                <Avatar status='success' initials='DQ' src='https://i.pravatar.cc/150?img=59' />
                <Avatar status='danger' initials='DQ' src='https://i.pravatar.cc/150?img=64' />
                <Avatar status='muted' initials='DQ' src='https://i.pravatar.cc/150?img=62' />
                <Avatar status='warning' initials='DQ' src='https://i.pravatar.cc/150?img=60' />
            </div>
        </div>
    )
}
