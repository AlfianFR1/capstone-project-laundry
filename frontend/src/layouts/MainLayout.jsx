import MainHeader from '@/components/headers/MainHeader';
import Container from '@/components/ui/Container';

export default function MainLayout({ children, className = '', ...props }) {
    return (
        <main className={`${className}`} {...props}>
            <MainHeader />
            <Container>{children}</Container>
        </main>
    );
}
