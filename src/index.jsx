import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App/app';
import './style.css';

createRoot(document.querySelector('#app')).render(<App />);
