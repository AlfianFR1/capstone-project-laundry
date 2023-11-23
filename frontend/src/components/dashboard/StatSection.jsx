import StatItem from '@/components/ui/StatItem';

export default function StatSection() {
    const statData = [
        {
            label: 'Total Pendapatan',
            value: 1000000,
            date: '2023-04-18',
            money: true,
        },
        {
            label: 'Total Transaksi',
            value: 100,
            date: '2023-04-18',
            money: false,
        },
        {
            label: 'Total Pelanggan',
            value: 20,
            date: '2023-04-18',
        },
        {
            label: 'Total Produk',
            value: 5,
            date: '2023-04-18',
        },
    ];

    return (
        <section className='grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4'>
            {statData.map((item, index) => (
                <StatItem key={index} data={item} />
            ))}
        </section>
    );
}
