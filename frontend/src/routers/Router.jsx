import DashboardPage from '@/pages/DashboardPage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import OrderHistoryPage from '@/pages/OrderHistoryPage';
import OrderPage from '@/pages/OrderPage';
import ProductPage from '@/pages/ProductPage';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />

            <Route path='/' element={<DashboardPage />} />
            <Route path='/pemesanan' element={<OrderPage />} />
            <Route path='/riwayat-pemesanan' element={<OrderHistoryPage />} />
            <Route path='/daftar-produk' element={<ProductPage />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}
