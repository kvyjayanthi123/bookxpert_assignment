import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './App';
const reactEl = createRoot(document.getElementById('root'));
reactEl.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)