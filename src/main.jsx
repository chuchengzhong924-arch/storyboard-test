import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const route = new URLSearchParams(window.location.search).get('route');

if (route) {
  const normalizedRoute = route.replace(/^\/+/, '');
  window.history.replaceState(null, '', `${import.meta.env.BASE_URL}${normalizedRoute}`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
