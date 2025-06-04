// src/Paginas/Sobre/index.js
import React from 'react';
import styles from './Sobre.module.css'; // Importa o CSS Module

function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <h2 className={styles.title}>A História da Fiora</h2>
      <p className={styles.paragraph}>
        Fiora é a mais temida duelista de Valoran, renomada por seus modos severos e pela paixão de sua lâmina.
        Nascida na Casa Laurent, a principal família de espadachins em Demacia, Fiora assumiu o controle de sua casa
        após o escândalo de seu pai. Agora, ela busca restaurar a honra de sua família e seu lugar de direito
        entre a nobreza de Demacia, provando que é digna através de sua esgrima impecável.
      </p>
      <p className={styles.paragraph}>
        Seu estilo de luta é inigualável, focado em precisão e contra-ataques devastadores. A cada movimento,
        Fiora busca o ponto vital de seus oponentes, transformando cada duelo em uma dança letal de lâminas.
      </p>

      <h3 className={styles.subtitle}>Habilidades:</h3>
      <ul className={styles.abilitiesList}>
        <li className={styles.abilityItem}>
          <strong className={styles.abilityName}>Passiva: Dança da Duelista</strong> - Fiora revela os Pontos Vitais de seus inimigos. Atacá-los concede Dano Verdadeiro adicional, Velocidade de Movimento e cura Fiora.
        </li>
        <li className={styles.abilityItem}>
          <strong className={styles.abilityName}>Q: Estocada</strong> - Fiora avança e estoca um inimigo ou Ponto Vital. Se atingir um inimigo, o Tempo de Recarga é parcialmente reembolsado.
        </li>
        <li className={styles.abilityItem}>
          <strong className={styles.abilityName}>W: Ripostar</strong> - Fiora para todos os ataques e habilidades por um curto período e depois estoca. Se ela bloquear um efeito de imobilização (como um atordoamento), ela atordoa o inimigo.
        </li>
        <li className={styles.abilityItem}>
          <strong className={styles.abilityName}>E: Esgrima</strong> - Fiora recebe Velocidade de Ataque nos dois próximos ataques. O primeiro é lento e não pode ser crítico, mas aplica lentidão. O segundo pode ser crítico.
        </li>
        <li className={`${styles.abilityItem} ${styles.ultimateItem}`}> {/* Combinando classes */}
          <strong className={styles.ultimateName}>R (Ultimate): Desafio Grandioso</strong> - Fiora revela os quatro Pontos Vitais de um Campeão inimigo por alguns segundos. Se Fiora atingir todos os 4 pontos ou se o alvo morrer, ela causa Dano Verdadeiro massivo e cria uma grande área de cura para ela e aliados. Este é o ápice da sua arte de duelar.
        </li>
      </ul>
    </div>
  );
}

export default Sobre;