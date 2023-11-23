import DashboardPage from '@/pages/DashboardPage';
import LoginPage from '@/pages/LoginPage';
import OrderHistoryPage from '@/pages/OrderHistoryPage';
import OrderPage from '@/pages/OrderPage';
import ProductPage from '@/pages/ProductPage';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />

            <Route path='/' element={<DashboardPage />} />
            <Route path='/order' element={<OrderPage />} />
            <Route path='/order-history' element={<OrderHistoryPage />} />
            <Route path='/products' element={<ProductPage />} />
        </Routes>
    );
}
