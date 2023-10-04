import React, { useEffect, useState } from 'react';
import styles from './normalCard.module.css';
import editIcon from '../../../images/Kind=Edit.svg';
import binIcon from '../../../images/Kind=Delete.svg';
import { URL_FISCHKAPP, URL_TOKEN } from '../../../App';
import { Card } from '../../../App';

interface NormalCardProps {
  side: boolean;
  isEdit: boolean;
  changeSide: () => void;
  openEdit: () => void;
  cards: Card[];
  setCards: (cards: Card[]) => void;
  index: number;
  id: string;
}

export const NormalCard: React.FC<NormalCardProps> = ({
  side,
  isEdit,
  changeSide,
  openEdit,
  cards,
  setCards,
  index,
  id,
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
        console.log(response.json())
        return response.json();
      })
      .then((data) => {
        console.log('Odpowiedź serwera na usunięcie:', data);
        let updatedCards = [...cards];
        updatedCards.splice(index, 1);
        setCards(updatedCards);
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
          }}
        >
          <img src='../../../images/Kind=Delete.svg' alt="bin" />
        </button>
        <button
          onClick={() => {
            openEdit();
          }}
        >
          <img src='../../../images/Kind=Edit.svg' alt="edit" />
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