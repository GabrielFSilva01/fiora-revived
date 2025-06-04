// src/Componentes/NavBar/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'; // Importa o CSS Module

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/fiora-lore" className={styles.navLink}>Sobre a Fiora</Link>
      <Link to="/skins/projeto" className={styles.navLink}>Skin Projeto</Link>
      <Link to="/skins/florescer-espiritual" className={styles.navLink}>Skin Florescer</Link>
    </nav>
  );
}

export default NavBar;