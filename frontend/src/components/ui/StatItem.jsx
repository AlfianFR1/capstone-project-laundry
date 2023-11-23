import { Typography } from '@material-tailwind/react';
import { dateFormater, formatPrice } from '@/utils/formaters';

export default function StatItem({ data }) {
    return (
        <div className='w-full p-4 space-y-1 bg-white border shadow-md min-h-28 rounded-2xl'>
            <Typography color='black' variant='small' className='font-medium'>
                {data?.label}
            </Typography>

            <Typography color='blue' variant='h4' className='font-bold'>
                {data?.money
                    ? `Rp. ${formatPrice(data?.value)}`
                    : `${data?.value}`}
            </Typography>

            <Typography color='gray' variant='small'>
                Pada {dateFormater(data?.date)}
            </Typography>
        </div>
    );
}
