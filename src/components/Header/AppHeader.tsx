import React, { useState } from 'react';
import styles from './AppHeader.module.css';
import fischkappLogo from '../../images/fischkappLogo.svg';
import plusIcon from '../../images/plusIcon.svg';
// header
interface AppHeaderProps {
  cardsAmount: number;
  onAddCard: () => void;
}
export const AppHeader: React.FC<AppHeaderProps> = ({ cardsAmount, onAddCard }) => {
  return (
    <header className={styles.headerConteiner}>
      <a href="" target="_blank">
        <img src={fischkappLogo} className={styles.logo} alt="Fischkapp logo" />
      </a>
      <p className={styles.cardInfo}>{`Cards :${cardsAmount}`}</p>
      <button className={styles.plusBtn} onClick={() => onAddCard()}>
        <img src={plusIcon} alt="plusIcon" />
      </button>
    </header>
  );
};
