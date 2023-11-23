import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App';
import MainProvider from './providers/MainProvider';

import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MainProvider>
            <App />
        </MainProvider>
    </React.StrictMode>
);
