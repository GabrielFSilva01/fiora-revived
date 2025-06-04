// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar os componentes de página
// Os nomes das pastas são Paginas e Componentes (P e C maiúsculos)
// O nome do arquivo dentro da pasta é index.js
import Home from './Paginas/Home';     
import Sobre from './Paginas/Sobre';   
import Skins from './Paginas/Skins';   

// Importar o componente NavBar
import NavBar from './Componentes/Navbar';

function App() {
  return (
    <BrowserRouter>
      {/* NavBar aparece em todas as páginas */}
      <NavBar /> 

      <Routes>
        {/* Rota da Página Inicial (Fiora Projeto) */}
        <Route path="/" element={<Home />} />

        {/* Rota da Página "Sobre Fiora" (Lore, Habilidades) */}
        <Route path="/fiora-lore" element={<Sobre />} />

        {/* Rota Dinâmica para os Detalhes de Cada Outra Skin */}
        <Route path="/skins/:skinId" element={<Skins />} />

        {/* Rota para qualquer URL que não corresponda (404) */}
        <Route path="*" element={<div><h1>404</h1><p>Página não encontrada!</p></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;