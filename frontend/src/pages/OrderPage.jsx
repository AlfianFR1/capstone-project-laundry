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
import CategoryItem from '../components/orders/CategoryItem';

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

    const steps = [
        {
            id: 1,
            icon: <MdOutlineCategory className='w-5 h-5' />,
            title: 'Step 1',
            description: 'Pilih kategori layanan',
        },
        {
            id: 2,
            icon: <MdShoppingCartCheckout className='w-5 h-5' />,
            title: 'Step 2',
            description: 'Pilih produk yang tersedia',
        },
        {
            id: 3,
            icon: <IoBagCheckOutline className='w-5 h-5' />,
            title: 'Step 3',
            description: 'Konfirmasi pesanan',
        },
    ];

    return (
        <MainLayout>
            <div className='w-full px-6 py-4 mt-8 md:mt-12 md:px-14'>
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                    lineClassName='bg-gray-200'
                >
                    {steps.map((step, i) => (
                        <Step
                            onClick={() => setActiveStep(i)}
                            className='cursor-pointer'
                            key={step.id}
                        >
                            {step.icon}
                            <div className='absolute -bottom-[5rem] md:-bottom-[4rem] w-max text-center'>
                                <Typography
                                    variant='h6'
                                    color={
                                        activeStep === i ? 'blue-gray' : 'gray'
                                    }
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    color={
                                        activeStep === i ? 'blue-gray' : 'gray'
                                    }
                                    className='font-normal max-w-[8rem] md:max-w-full'
                                    variant='small'
                                >
                                    {step.description}
                                </Typography>
                            </div>
                        </Step>
                    ))}
                </Stepper>
            </div>

            {activeStep === 0 && (
                <main className='grid grid-cols-1 gap-8 mt-28 lg:grid-cols-2'>
                    {categories.map((category) => (
                        <CategoryItem
                            key={category.id}
                            category={category}
                            nextStep={handleNext}
                        />
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
