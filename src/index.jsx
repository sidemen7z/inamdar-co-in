import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Only initialize React if not on admin dashboard route
if (!window.location.pathname.startsWith('/Admindashboard/')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

