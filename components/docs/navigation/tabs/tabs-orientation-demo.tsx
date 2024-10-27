'use client'

import { Tabs } from '@/components/ui'

export default function TabsOrientationDemo() {
    return (
        <Tabs orientation='vertical' aria-label='E-Learning Platform'>
            <Tabs.List>
                <Tabs.Label id='c'>Courses</Tabs.Label>
                <Tabs.Label id='e'>Exams</Tabs.Label>
                <Tabs.Label id='g'>Grades</Tabs.Label>
                <Tabs.Label id='f'>Forums</Tabs.Label>
                <Tabs.Label id='p'>Profile</Tabs.Label>
            </Tabs.List>
            <Tabs.Content id='c'>
                Enroll in courses and access learning materials on various subjects.
            </Tabs.Content>
            <Tabs.Content id='e'>
                Take practice exams and quizzes to test your knowledge.
            </Tabs.Content>
            <Tabs.Content id='g'>View your grades and track your academic progress.</Tabs.Content>
            <Tabs.Content id='f'>
                Participate in discussion forums with other students and instructors.
            </Tabs.Content>
            <Tabs.Content id='p'>
                Update your profile and customize your learning preferences.
            </Tabs.Content>
        </Tabs>
    )
}
