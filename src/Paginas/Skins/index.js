// src/Paginas/Skins/index.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Skins.module.css';

// Dados simulados das skins (Mover para src/data/fioraData.js depois!)
const mockSkinsData = [
  { 
    id: 'original', 
    name: 'Fiora Clássica', 
    lore: 'A lendária duelista da Casa Laurent, em sua forma mais pura e elegante. Ela personifica a nobreza e a precisão da esgrima demaciana.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg', 
    themeColor: '#8B4513' 
  },
  { 
    id: 'projeto', 
    name: 'PROJETO: Fiora', 
    lore: 'Uma ciborgue aprimorada para o combate em um futuro distópico, combinando elegância robótica e tecnologia de ponta letal.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_10.jpg', 
    themeColor: '#00FFFF' 
  },
  { 
    id: 'florescer-espiritual', 
    name: 'Fiora Florescer Espiritual', 
    lore: 'Nascida do reino espiritual de Ionia, Fiora traz a graça de uma flor de cerejeira e a letalidade de uma lâmina fantasma, guiada pelos espíritos antigos.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_15.jpg', 
    themeColor: '#FF69B4' 
  },
  { 
    id: 'mestra-de-esgrima', 
    name: 'Fiora Mestra de Esgrima', 
    lore: 'Com sua disciplina inabalável e anos de treinamento rigoroso, Fiora é a personificação da perfeição da esgrima, superando cada adversário com técnica impecável.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_2.jpg', 
    themeColor: '#A52A2A' 
  },
  { 
    id: 'noiva-fantasma', 
    name: 'Fiora Noiva Fantasma', 
    lore: 'Emergindo das sombras de um casamento abandonado, Fiora desliza como um espectro, sua lâmina fria como a morte em seu encalço.',
    imageUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_1.jpg', 
    themeColor: '#800080' 
  },
];

function Skins() {
  const { skinId } = useParams();
  const [currentSkin, setCurrentSkin] = useState(null);

  useEffect(() => {
    const foundSkin = mockSkinsData.find(skin => skin.id === skinId);
    setCurrentSkin(foundSkin);

    if (foundSkin) {
      document.body.style.backgroundColor = foundSkin.themeColor;
      document.body.style.color = 'white'; 
    } else {
      document.body.style.backgroundColor = '#2c3e50'; 
      document.body.style.color = 'white';
    }

    return () => {
      document.body.style.backgroundColor = ''; 
      document.body.style.color = '';
    };
  }, [skinId]); 

  if (!currentSkin) {
    return (
      <div className={styles.notFoundContainer}>
        <h2 className={styles.notFoundTitle}>Skin não encontrada...</h2>
        <p className={styles.notFoundText}>A Fiora ainda não dominou essa habilidade de aparecer!</p>
      </div>
    );
  }

  return (
    <div className={styles.skinsContainer}>
      <h2 className={styles.skinTitle} style={{ color: currentSkin.themeColor }}>
        {currentSkin.name}
      </h2>
      <img 
        src={currentSkin.imageUrl} 
        alt={currentSkin.name} 
        className={styles.skinImage}
      />
      <p className={styles.skinLore}>
        {currentSkin.lore}
      </p>
    </div>
  );
}

export default Skins;