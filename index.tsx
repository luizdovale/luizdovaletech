import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Links antigos usavam rotas com "#" (ex.: /#/sobre): leva para o endereço novo (/sobre).
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);