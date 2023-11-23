import StatSection from '@/components/dashboard/StatSection';
import TransactionSection from '@/components/dashboard/TransactionSection';
import MainLayout from '@/layouts/MainLayout';

export default function DashboardPage() {
    return (
        <MainLayout>
            <StatSection />
            <TransactionSection />
        </MainLayout>
    );
}
