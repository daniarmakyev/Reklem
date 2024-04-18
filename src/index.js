import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MainProvaider from './context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainProvaider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MainProvaider>
);

