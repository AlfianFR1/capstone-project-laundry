import MainLayout from '@/layouts/MainLayout';
import {
    Button,
    Chip,
    Input,
    Step,
    Stepper,
    Typography,
} from '@material-tailwind/react';

import SatuanImage from '@/assets/images/satuan.png';
import KiloanImage from '@/assets/images/kiloan.png';
import { useStore } from '@/stores/useStore';
import { useEffect, useState } from 'react';
import { MdOutlineCategory, MdShoppingCartCheckout } from 'react-icons/md';
import { IoBagCheckOutline } from 'react-icons/io5';
import ProductItem from '../components/orders/ProductItem';

export default function OrderPage() {
    const { selectedCategory, setSelectedCategory } = useStore();

    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const [search, setSearch] = useState('');

    const filteredProducts = selectedCategory?.products?.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = [
        {
            id: 1,
            name: 'Satuan',
            price: 7000,
            image: SatuanImage,
            products: [
                {
                    id: 1,
                    name: 'Baju',
                    price: 7000,
                },
                {
                    id: 2,
                    name: 'Celana',
                    price: 10000,
                },
                {
                    id: 3,
                    name: 'Jaket',
                    price: 12000,
                },
                {
                    id: 4,
                    name: 'Jas',
                    price: 20000,
                },
            ],
        },
        {
            id: 2,
            name: 'Kiloan',
            price: 2000,
            image: KiloanImage,
            products: [
                {
                    id: 1,
                    name: 'Baju',
                    price: 0,
                },
                {
                    id: 2,
                    name: 'Celana',
                    price: 0,
                },
                {
                    id: 3,
                    name: 'Jaket',
                    price: 0,
                },
                {
                    id: 4,
                    name: 'Jas',
                    price: 0,
                },
            ],
        },
    ];

    useEffect(() => {
        if (selectedCategory) {
            setActiveStep(1);
        } else {
            setActiveStep(0);
        }
    }, [selectedCategory]);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        handleNext();
    };

    return (
        <MainLayout>
            <div className='w-full py-4 mt-12 px-14'>
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                    lineClassName='bg-gray-200'
                >
                    <Step
                        onClick={() => setActiveStep(0)}
                        className='cursor-pointer'
                    >
                        <MdOutlineCategory className='w-5 h-5' />
                        <div className='absolute -bottom-[5rem] md:-bottom-[4rem] w-max text-center'>
                            <Typography
                                variant='h6'
                                color={activeStep === 0 ? 'blue-gray' : 'gray'}
                            >
                                Step 1
                            </Typography>
                            <Typography
                                color={activeStep === 0 ? 'blue-gray' : 'gray'}
                                className='font-normal max-w-[8rem] md:max-w-full'
                                variant='small'
                            >
                                Pilih kategori layanan
                            </Typography>
                        </div>
                    </Step>
                    <Step
                        onClick={() => setActiveStep(1)}
                        className='cursor-pointer'
                    >
                        <MdShoppingCartCheckout className='w-5 h-5' />
                        <div className='absolute -bottom-[5rem] md:-bottom-[4rem] w-max text-center'>
                            <Typography
                                variant='h6'
                                color={activeStep === 1 ? 'blue-gray' : 'gray'}
                            >
                                Step 2
                            </Typography>
                            <Typography
                                color={activeStep === 1 ? 'blue-gray' : 'gray'}
                                className='font-normal max-w-[8rem] md:max-w-full'
                                variant='small'
                            >
                                Pilih produk yang tersedia
                            </Typography>
                        </div>
                    </Step>
                    <Step
                        onClick={() => setActiveStep(2)}
                        className='cursor-pointer'
                    >
                        <IoBagCheckOutline className='w-5 h-5' />
                        <div className='absolute -bottom-[5rem] md:-bottom-[4rem] w-max text-center'>
                            <Typography
                                variant='h6'
                                color={activeStep === 2 ? 'blue-gray' : 'gray'}
                            >
                                Step 3
                            </Typography>
                            <Typography
                                color={activeStep === 2 ? 'blue-gray' : 'gray'}
                                className='font-normal max-w-[8rem] md:max-w-full'
                                variant='small'
                            >
                                Konfirmasi pesanan
                            </Typography>
                        </div>
                    </Step>
                </Stepper>
            </div>

            {activeStep === 0 && (
                <main className='grid grid-cols-1 gap-8 mt-28 lg:grid-cols-2'>
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            className='flex items-center px-8 transition-all border border-gray-200 shadow-lg cursor-pointer flexWrap rounded-xl group hover:shadow-sm active:border-indigo-200 active:shadow-sm'
                            color='white'
                            size='sm'
                            onClick={() => handleSelectCategory(category)}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className='h-40 w-44 group-hover:animate-bounce'
                            />

                            <div className='ml-8 text-left normal-case'>
                                <Typography color='blue-gray' variant='h5'>
                                    {category.name}
                                </Typography>

                                <Typography color='gray' variant='small'>
                                    Mulai dari Rp {category.price}/kg
                                </Typography>
                            </div>
                        </Button>
                    ))}
                </main>
            )}

            {activeStep === 1 && selectedCategory && (
                <>
                    {selectedCategory &&
                        selectedCategory?.products?.length > 0 && (
                            <header className='mt-24 flexBetween'>
                                <Chip
                                    color='light-blue'
                                    size='sm'
                                    className='w-fit'
                                    variant='outlined'
                                    value={selectedCategory.name}
                                    onClose={() => setSelectedCategory(null)}
                                />

                                <div className='max-w-md'>
                                    <Input
                                        label='Cari produk'
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                </div>
                            </header>
                        )}
                    <main className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
                        {filteredProducts.length === 0 ? (
                            <div className='flex items-center justify-center col-span-full'>
                                <Typography
                                    variant='h5'
                                    className='text-gray-500'
                                >
                                    Produk tidak ditemukan
                                </Typography>
                            </div>
                        ) : (
                            filteredProducts.map((product) => (
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        )}
                    </main>
                </>
            )}

            <footer className='flex items-center justify-end py-4 mt-8'>
                <div className='flex items-center space-x-4'>
                    {!isFirstStep && (
                        <Button
                            color='blue-gray'
                            variant='outlined'
                            size='sm'
                            ripple={false}
                            onClick={handlePrev}
                        >
                            Kembali
                        </Button>
                    )}
                    <Button
                        color='blue'
                        variant='filled'
                        size='sm'
                        ripple={false}
                        onClick={handleNext}
                    >
                        Selanjutnya
                    </Button>
                </div>
            </footer>
        </MainLayout>
    );
}
