export default function GuestLayout({ className = '', children }) {
    return (
        <main
            className={`flexCenterCol bg-blue-gray-50 min-h-screen w-full ${className}`}
        >
            {children}
        </main>
    );
}
