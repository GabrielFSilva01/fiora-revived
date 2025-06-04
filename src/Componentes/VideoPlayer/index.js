// src/Componentes/VideoPlayer/index.js
import React, { useRef, useEffect } from 'react';
import styles from './VideoPlayer.module.css';

const LOCAL_VIDEO_URL = '/videos/Fiora1.mp4'; 

function VideoPlayer({ play }) { // Recebe a prop 'play'
  const videoRef = useRef(null); 

  useEffect(() => {
    // Se a referência ao vídeo existe E a prop 'play' é true, tente tocar o vídeo.
    if (videoRef.current && play) { 
      videoRef.current.play().catch(error => {
        console.error("Erro ao tentar reproduzir o vídeo diretamente:", error);
      });
    }
  }, [play]); // <--- GARANTA QUE '[play]' ESTÁ AQUI COMO DEPENDÊNCIA DO useEffect

  return (
    // O container do vídeo terá uma classe que controla a opacidade
    <div className={`${styles.videoPlayerContainer} ${play ? styles.videoPlayerVisible : styles.videoPlayerHidden}`}>
      <video
        ref={videoRef} 
        loop           
        muted          
        playsInline    
        className={styles.videoElement} 
        poster="/videos/fiora-video-poster.jpg" 
      >
        <source src={LOCAL_VIDEO_URL} type="video/mp4" /> 
        Seu navegador não suporta a tag de vídeo HTML5.
      </video>
    </div>
  );
}

export default VideoPlayer;