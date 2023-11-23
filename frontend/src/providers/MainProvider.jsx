import { ThemeProvider } from '@material-tailwind/react';
import { AuthProvider } from 'react-auth-kit';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export default function MainProvider({ children }) {
    const authConfig = {
        authType: 'localstorage',
        authName: 'auth-storage',
    };

    return (
        <>
            <Toaster position='top-right' reverseOrder={false} />
            <AuthProvider {...authConfig}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <ThemeProvider>{children}</ThemeProvider>
                    </BrowserRouter>
                </QueryClientProvider>
            </AuthProvider>
        </>
    );
}
