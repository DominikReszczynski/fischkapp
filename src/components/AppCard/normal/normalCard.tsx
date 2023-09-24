import React from 'react';
import styles from './normalCard.module.css';
import editIcon from '../../../images/Kind=Edit.svg';
import binIcon from '../../../images/Kind=Delete.svg'
export const NormalCard = ({
  front,
  back,
  side,
  isEdit,
  changeSide,
  openEdit,
  cards,
  index,
  setCards
}) => {
  const deleteCard = () => {
    let updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
    console.log(`card after delete: ${cards}`)
  };
  
  return (
    
      <div className={styles.card}>
        <div className={styles.editConteiner}>
        <button
            onClick={() => {
              console.log('delete');
              deleteCard()
            }}
          >
            <img src={binIcon} alt="bin" />
          </button>
          <button
            onClick={() => {
              console.log('jestem w edit');
              openEdit();
            }}
          >
            <img src={editIcon} alt="edit" />
          </button>
        </div>
        <button
          className={styles.cardBtn}
          onClick={() => (!isEdit ? changeSide() : null)}>
        <h4 className={styles.text}>{side ? front : back}</h4>
        </button>
      </div>
    
  );
};
