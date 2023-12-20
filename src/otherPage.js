import React from 'react';
import ReactDOM from 'react-dom';
import Pwaapp from './pwa_components/pwa_app.js';

const root = ReactDOM.createRoot(document.getElementById('pwaroot'));

root.render(
    <React.StrictMode>
        <Pwaapp />
    </React.StrictMode>
);
