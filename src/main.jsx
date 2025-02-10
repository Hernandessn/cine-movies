import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyles } from './styles/globalStyles';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/routes'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
