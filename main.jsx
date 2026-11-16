import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

console.log('[SWMS] Initializing Smart Water Management UI...');

const container = document.getElementById('root');
if (container) {
  try {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('[SWMS] App successfully mounted to DOM.');
  } catch (err) {
    console.error('[SWMS] Fatal mount error:', err);
    container.innerHTML = `
      <div style="padding: 24px; background: #fee2e2; color: #991b1b; font-family: monospace; border-radius: 8px; margin: 20px;">
        <h2>Lỗi Render Giao Diện React:</h2>
        <pre>${err.stack || err.message}</pre>
      </div>
    `;
  }
}
