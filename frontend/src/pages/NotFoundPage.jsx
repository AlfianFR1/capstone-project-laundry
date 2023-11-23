import GuestLayout from '@/layouts/GuestLayout';
import { Typography } from '@material-tailwind/react';
import { TbError404 } from 'react-icons/tb';

export default function NotFoundPage() {
    return (
        <GuestLayout className='bg-blue-gray-50'>
            <div className='flex-col gap-6 flexCenter'>
                <main className='flex-col text-center flexCenter'>
                    <div className='flex items-center gap-2'>
                        <TbError404 size={56} color='#545454' />
                        <Typography
                            variant='h2'
                            className='font-semibold text-textSecondary'
                        >
                            Page Not Found
                        </Typography>
                    </div>
                    <Typography
                        variant='paragraph'
                        className='text-center text-textSecondary'
                    >
                        Sorry, the page you are looking for could not be found.
                    </Typography>
                </main>
            </div>
        </GuestLayout>
    );
}
