import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import { CommandPaletteProvider } from './components/CommandPalette';
import App from './App';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CommandPaletteProvider>
          <App />
        </CommandPaletteProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
