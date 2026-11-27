import { BrowserRouter } from 'react-router-dom';
import { lazy, StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import './dark-theme.css';
import './glass-surfaces.css';
import App from './App.jsx';

const modules = import.meta.glob('./pages/*.jsx');
const views = Object.fromEntries(Object.entries(modules).map(([path, loader]) => [
  path.slice('./pages/'.length, -'.jsx'.length), lazy(loader),
]));

const application = (
  <StrictMode>
    <BrowserRouter><App views={views} /></BrowserRouter>
  </StrictMode>
);

const root = document.getElementById('root');
if (root.querySelector('main')) hydrateRoot(root, application);
else createRoot(root).render(application);
