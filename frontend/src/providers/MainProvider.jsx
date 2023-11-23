import { ThemeProvider } from '@material-tailwind/react';
import { AuthProvider } from 'react-auth-kit';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

export default function MainProvider({ children }) {
    const authConfig = {
        authType: 'localstorage',
        authName: 'auth-storage',
    };

    return (
        <>
            <Toaster position='top-right' reverseOrder={false} />
            <AuthProvider {...authConfig}>
                <BrowserRouter>
                    <ThemeProvider>{children}</ThemeProvider>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}
