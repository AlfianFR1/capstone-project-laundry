import { Outlet } from 'react-router-dom';

export default function GuestLayout({ className = '' }) {
    return (
        <main className={`flexCenter min-h-screen w-full ${className}`}>
            <Outlet />
        </main>
    );
}
