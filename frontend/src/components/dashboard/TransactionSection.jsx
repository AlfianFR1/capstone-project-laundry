import SectionTitle from '@/components/ui/SectionTitle';
import {
    Button,
    Card,
    Chip,
    Tab,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography,
} from '@material-tailwind/react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function TransactionSection() {
    const navigate = useNavigate();

    const TABLE_HEAD = [
        'Sales ID',
        'Nama Pelanggan',
        'Jenis Layanan',
        'Kategori',
        'Status',
        'Tanggal Pesanan',
        '',
    ];

    const TABLE_ROWS = [
        {
            salesId: '230202-020302-KDIAE',
            name: 'John Michael',
            category: 'Satuan',
            service: 'Cuci Kering',
            status: 'Berhasil',
            salesDate: '2023-04-18',
        },
        {
            salesId: '230212-020302-ASKDO',
            name: 'Alexa Liras',
            category: 'Satuan',
            service: 'Cuci Kering',
            status: 'Berhasil',
            salesDate: '2023-04-18',
        },
        {
            salesId: '230202-021212-MASOO',
            name: 'Laurent Perrier',
            category: 'Satuan',
            service: 'Cuci Kering',
            status: 'Berhasil',
            salesDate: '2023-04-18',
        },
        {
            salesId: '230204-120312-NCAKA',
            name: 'Michael Levi',
            category: 'Satuan',
            service: 'Cuci Kering',
            status: 'Berhasil',
            salesDate: '2023-04-18',
        },
        {
            salesId: '230203-212302-POAWI',
            name: 'Richard Gran',
            category: 'Satuan',
            service: 'Cuci Kering',
            status: 'Berhasil',
            salesDate: '2023-04-18',
        },
    ];

    const tabsData = [
        {
            label: 'Satuan',
            value: 'satuan',
        },
        {
            label: 'Kiloan',
            value: 'kiloan',
        },
    ];

    return (
        <section className='mt-10'>
            <SectionTitle
                title={'Transaksi'}
                subTitle={'Menu ini digunakan untuk mengelola transaksi'}
                actionElement={
                    <Button
                        color='light-blue'
                        size='sm'
                        className='flex items-center gap-3'
                        onClick={() => navigate('/pemesanan')}
                    >
                        <FiPlus size={20} />
                        Tambah
                    </Button>
                }
            />

            <div className='mt-8'>
                <Tabs value='satuan'>
                    <TabsHeader className='w-full max-w-md md:max-w-sm'>
                        {tabsData.map(({ label, value }) => (
                            <Tab key={value} value={value} className='text-sm'>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        <Card className='w-full h-full mt-6 overflow-auto border shadow-none'>
                            <table className='w-full text-left table-auto min-w-max'>
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map((head) => (
                                            <th
                                                key={head}
                                                className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'
                                            >
                                                <Typography
                                                    variant='small'
                                                    color='blue-gray'
                                                    className='font-normal leading-none opacity-70'
                                                >
                                                    {head}
                                                </Typography>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {TABLE_ROWS.map((data, index) => {
                                        const isLast =
                                            index === TABLE_ROWS.length - 1;
                                        const classes = isLast
                                            ? 'p-4'
                                            : 'p-4 border-b border-blue-gray-50';

                                        return (
                                            <tr key={index}>
                                                <td className={classes}>
                                                    <Typography
                                                        variant='small'
                                                        color='blue-gray'
                                                        className='font-normal'
                                                    >
                                                        {data.salesId}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant='small'
                                                        color='blue-gray'
                                                        className='font-normal'
                                                    >
                                                        {data.name}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant='small'
                                                        color='blue-gray'
                                                        className='font-normal'
                                                    >
                                                        {data.service}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant='small'
                                                        color='blue-gray'
                                                        className='font-normal'
                                                    >
                                                        {data.category}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Chip
                                                        value={data.status}
                                                        className='w-fit'
                                                        color='green'
                                                        size='sm'
                                                    />
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant='small'
                                                        color='blue-gray'
                                                        className='font-normal'
                                                    >
                                                        {data.salesDate}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Button
                                                        color='light-blue'
                                                        size='sm'
                                                    >
                                                        Detail
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Card>
                    </TabsBody>
                </Tabs>
            </div>
        </section>
    );
}
