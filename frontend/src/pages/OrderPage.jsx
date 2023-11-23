import MainLayout from '@/layouts/MainLayout';
import { Button, Typography } from '@material-tailwind/react';

import SatuanImage from '@/assets/images/satuan.png';
import KiloanImage from '@/assets/images/kiloan.png';
import { useStore } from '@/stores/useStore';

export default function OrderPage() {
    const { selectedCategory, setSelectedCategory } = useStore();

    const categories = [
        {
            id: 1,
            name: 'Satuan',
            price: 7000,
            image: SatuanImage,
        },
        {
            id: 2,
            name: 'Kiloan',
            price: 2000,
            image: KiloanImage,
        },
    ];

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <MainLayout>
            {selectedCategory ? (
                <section>
                    <header className='mt-20 text-center'>
                        <Typography color='blue-gray' variant='h5'>
                            Pilih layanan
                        </Typography>

                        <Typography color='gray' variant='small'>
                            Pilih salah satu layanan yang tersedia
                        </Typography>
                    </header>

                    <main className='grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2'>
                        asd
                    </main>
                </section>
            ) : (
                <section>
                    <header className='mt-20 text-center'>
                        <Typography color='blue-gray' variant='h5'>
                            Pilih kategori layanan
                        </Typography>

                        <Typography color='gray' variant='small'>
                            Pilih salah satu kategori layanan yang tersedia
                        </Typography>
                    </header>

                    <main className='grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2'>
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
                </section>
            )}
        </MainLayout>
    );
}
