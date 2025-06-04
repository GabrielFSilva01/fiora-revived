// src/Paginas/Home/index.js
import React, { useState } from 'react';
import VideoPlayer from '../../Componentes/VideoPlayer'; 
import styles from './Home.module.css'; // Importa o CSS Module

function Home() {
  const [videoStarted, setVideoStarted] = useState(false); 
  const handleStartVideo = () => { setVideoStarted(true); };

  return (
    <div className={styles.homeContainer}> 
      <VideoPlayer play={videoStarted} /> 
      
      <div className={styles.contentOverlay}>
        <h1 className={styles.mainTitle}>Anseio por um Adversário a altura!!! </h1>
        <p className={styles.subText}>Explore a grandiosidade e a precisão da duelista mais temida de Valoran.</p>
        <p className={styles.featuredSkin}>Atualmente em destaque: <span className={styles.neonText}>Fiora PROJETO</span>.</p>
        
        {!videoStarted && ( 
          <button 
            onClick={handleStartVideo} 
            className={styles.startButton} // <--- AQUI: APLICA A NOVA CLASSE CSS MODULE
            // REMOVA O ATRIBUTO 'style' INTEIRO DAQUI!
          >
            Iniciar Projeto FIORA 
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;