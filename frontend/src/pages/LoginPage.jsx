import Form from '@/components/ui/Form';
import FormGroup from '@/components/ui/FormGroup';
import FormLabel from '@/components/ui/FormLabel';
import GuestLayout from '@/layouts/GuestLayout';
import { Button, Card, Input, Typography } from '@material-tailwind/react';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log('login', data);
        toast.success('Login berhasil');
    };

    return (
        <GuestLayout className='relative'>
            <Card className='p-6 max-w-md w-full shadow-lg'>
                <header>
                    <Typography color='blue-gray' variant='h5'>
                        Login
                    </Typography>
                    <Typography color='gray' variant='paragraph'>
                        Login untuk melanjutkan
                    </Typography>
                </header>

                <Form onSubmit={handleLogin} className='mt-8' id={'login-form'}>
                    <FormGroup>
                        <FormLabel label={'Email'} />
                        <Input
                            type='email'
                            placeholder='Example@gmail.com'
                            name='email'
                            labelProps={{
                                className: 'hidden',
                            }}
                            className={'noInputLabel'}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel label={'Password'} />
                        <Input
                            type='password'
                            placeholder='Password'
                            name='password'
                            labelProps={{
                                className: 'hidden',
                            }}
                            className={'noInputLabel'}
                        />
                    </FormGroup>
                </Form>

                <footer className='mt-10'>
                    <Button
                        form='login-form'
                        type='submit'
                        color='light-blue'
                        fullWidth
                    >
                        Login
                    </Button>
                </footer>
            </Card>

            <footer className='absolute bottom-12 left-1/2 -translate-x-1/2'>
                <Typography color='gray' variant='small'>
                    &copy; 2023. All rights reserved.
                </Typography>
            </footer>
        </GuestLayout>
    );
}
