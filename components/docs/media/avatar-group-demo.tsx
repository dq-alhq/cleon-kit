'use client'

import { Avatar, AvatarGroup } from '@/components/ui'

export default function AvatarGroupDemo() {
    return (
        <AvatarGroup aria-label='avatar-group'>
            <Avatar
                tooltip='Image 1'
                alt='image 1'
                initials='DQ'
                src='https://i.pravatar.cc/150?img=61'
            />
            <Avatar
                tooltip='Image 1'
                alt='image 2'
                initials='DQ'
                src='https://i.pravatar.cc/150?img=62'
            />
            <Avatar
                tooltip='Image 1'
                alt='image 3'
                initials='DQ'
                src='https://i.pravatar.cc/150?img=63'
            />
            <Avatar
                tooltip='Image 1'
                alt='image 4'
                initials='DQ'
                src='https://i.pravatar.cc/150?img=64'
            />
            <Avatar
                tooltip='Image 1'
                alt='image 5'
                initials='DQ'
                src='https://i.pravatar.cc/150?img=65'
            />
        </AvatarGroup>
    )
}
