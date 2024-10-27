'use client'

import InputOtpControlledDemo from '@/components/docs/forms/otp/otp-controlled-demo'
import PaginationDemo from '@/components/docs/navigation/pagination/pagination-demo'
import ModalTriggeredByMenuDemo from '@/components/docs/overlays/modal/modal-triggered-by-menu-demo'
import PopoverDemo from '@/components/docs/overlays/popover/popover-demo'
import TooltipDemo from '@/components/docs/overlays/tooltip/tooltip-demo'
import ComboBoxDemo from '@/components/docs/pickers/combo-box/combo-box-demo'
import MeterDemo from '@/components/docs/statuses/meter-demo'
import ProgressDemo from '@/components/docs/statuses/progress-bar-demo'
import { Breadcrumbs, Card, DateRangePicker, SearchField, Select } from '@/components/ui'

export default function OptionsSink() {
    return (
        <Card className='p-4'>
            <Breadcrumbs>
                <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item href='/docs'>Docs</Breadcrumbs.Item>
                <Breadcrumbs.Item>Components</Breadcrumbs.Item>
            </Breadcrumbs>
            <div className='flex flex-col w-full lg:flex-row gap-2 items-center mt-6'>
                <Select
                    aria-labelledby='per-page'
                    id='per-page'
                    placeholder='10'
                    className='lg:w-20'
                    defaultSelectedKey={'10'}
                >
                    <Select.Item id='10'>10</Select.Item>
                    <Select.Item id='20'>20</Select.Item>
                    <Select.Item id='30'>30</Select.Item>
                </Select>
                <SearchField className='w-full' aria-label='Search' />
                <DateRangePicker className='w-full' aria-label='Event date' />
            </div>
            <div className='flex gap-1 items-end mt-4'>
                <ComboBoxDemo />
                <ModalTriggeredByMenuDemo />
            </div>
            <div className='mt-4 grid gap-2'>
                <ProgressDemo />
                <MeterDemo />
            </div>
            <div className='flex justify-center gap-5 mt-4'>
                <TooltipDemo />
                <PopoverDemo />
            </div>
            <div className='mt-4 flex justify-center'>
                <InputOtpControlledDemo />
            </div>
            <div className='mt-[13px]'>
                <PaginationDemo />
            </div>
        </Card>
    )
}
