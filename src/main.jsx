import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster"
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <Toaster />
    </BrowserRouter>
  </>
);