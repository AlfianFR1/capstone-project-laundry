import { Typography } from '@material-tailwind/react';

export default function SectionTitle({
    title,
    subTitle,
    wrapperClassName = '',
    titleClassName = '',
    subTitleClassName = '',
    actionElement,
}) {
    return (
        <header className={`mt-8 ${wrapperClassName} flexBetween`}>
            <div>
                <Typography
                    color='blue-gray'
                    variant='h5'
                    className={titleClassName}
                >
                    {title}
                </Typography>

                <Typography
                    color='gray'
                    variant='small'
                    className={subTitleClassName}
                >
                    {subTitle}
                </Typography>
            </div>

            {actionElement}
        </header>
    );
}
