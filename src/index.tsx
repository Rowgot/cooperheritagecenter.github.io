import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'styles/app.scss';
import 'bootstrap/dist/js/bootstrap.js';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

const routerBasename = window.location.pathname
  .replace(/\/index\.html$/, '')
  .replace(/\/$/, '') || '/';

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename} future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 
