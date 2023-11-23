import {
    Button,
    Collapse,
    IconButton,
    Navbar,
    Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';

import NavList from './NavList';

import { IoClose, IoMenu } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function MainHeader() {
    const navigate = useNavigate();
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navMenus = [
        {
            name: 'Transaksi',
            link: '/',
            sequence: 1,
        },
        {
            name: 'Riwayat Pemesanan',
            link: '/riwayat-pemesanan',
            sequence: 2,
        },
        {
            name: 'Daftar Produk',
            link: '/daftar-produk',
            sequence: 3,
        },
    ];

    const handleLogout = () => {
        console.log('Logout');
        toast.success('Logout Berhasil');
        navigate('/login');
    };

    return (
        <Navbar className='sticky z-20 w-full max-w-6xl px-4 py-4 mx-auto mt-4 bg-white border border-gray-300 top-4 h-max lg:px-8 lg:py-4'>
            <div className='flex items-center justify-between text-blue-gray-900'>
                <Link to='/'>
                    <Typography color='blue-gray' variant='h6'>
                        Laundry App
                    </Typography>
                </Link>

                <div className='hidden mr-4 lg:block'>
                    <NavList menuList={navMenus} />
                </div>

                <div className='flex items-center gap-x-1'>
                    <Button
                        variant='gradient'
                        size='sm'
                        color='red'
                        className='hidden lg:inline-block'
                        onClick={handleLogout}
                    >
                        <span>Logout</span>
                    </Button>
                </div>
                <IconButton
                    variant='text'
                    className='w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? <IoClose size={24} /> : <IoMenu size={24} />}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className='pt-6 pb-4'>
                    <NavList menuList={navMenus} />
                </div>
                <div className='flex items-center pb-2 gap-x-1'>
                    <Button
                        fullWidth
                        variant='gradient'
                        color='red'
                        size='sm'
                        className='py-2.5 hover:shadow-none'
                        ripple={false}
                        onClick={handleLogout}
                    >
                        <span>Logout</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}
