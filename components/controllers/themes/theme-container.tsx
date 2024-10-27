import DataFormSink from '@/app/(app)/sink/data-form'
import OptionsSink from '@/app/(app)/sink/options'
import { Button, buttonVariants } from '@/components/ui'

export default function ThemeContainer() {
    return (
        <div className='container w-full flex flex-col gap-6 items-center py-6'>
            <div className='w-full flex gap-2 items-center justify-around flex-wrap p-4 rounded-lg border'>
                {Object.keys(buttonVariants.variants.variant).map((variant) => (
                    <Button key={variant} variant={variant as any}>
                        {variant}
                    </Button>
                ))}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-6 w-full'>
                <DataFormSink />
                <OptionsSink />
            </div>
        </div>
    )
}
