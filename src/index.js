// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Importa seu App.js (agora com a extensão explícita)

// Importações dos arquivos CSS globais.
// O Create React App espera que estes arquivos sejam importados.
import './index.css'; 
import './App.css'; // Este arquivo deve estar vazio

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);