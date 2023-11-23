import { Typography } from '@material-tailwind/react';

export default function FormLabel({ className = '', label, ...props }) {
    return (
        <Typography
            as={'label'}
            color='gray'
            variant={'small'}
            className={`${className}`}
            {...props}
        >
            {label || 'Label'}
        </Typography>
    );
}
