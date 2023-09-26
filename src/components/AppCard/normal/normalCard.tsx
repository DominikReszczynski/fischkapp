import React, { useEffect, useState } from 'react';
import styles from './normalCard.module.css';
import editIcon from '../../../images/Kind=Edit.svg';
import binIcon from '../../../images/Kind=Delete.svg';
import { URL_FISCHKAPP, URL_TOKEN } from '../../../App';
export const NormalCard = ({
  front,
  back,
  side,
  isEdit,
  changeSide,
  openEdit,
  cards,
  setCards,
  index,
  id,
  onAddCard,
}) => {
  const [flip, setFlip] = useState(false);
  const deleteCard = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        Authorization: URL_TOKEN,
      },
    };
  
    fetch(`${URL_FISCHKAPP}/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error('Wystąpił błąd podczas usuwania');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Odpowiedź serwera na usunięcie:', data);
        onAddCard();
      })
      .catch((error) => {
        console.error('Błąd:', error);
      });
      
  };
  useEffect(() => {
    setTimeout(() => setFlip(false), 400);
  }, [flip]);
  return (
    <div className={`${styles.card} ${flip ? styles.flip : ''}`}>
      <div className={styles.editConteiner}>
        <button
          onClick={() => {
            deleteCard();
            window.location.reload();
          }}
        >
          <img src={binIcon} alt="bin" />
        </button>
        <button
          onClick={() => {
            openEdit();
          }}
        >
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      <button
        className={styles.cardBtn}
        onClick={() => {
          !isEdit ? (changeSide(), setFlip(true)) : null;
        }}
      >
        <h4 className={styles.text}>
          {side ? cards[index]?.front : cards[index]?.back}
        </h4>
      </button>
    </div>
  );
};
