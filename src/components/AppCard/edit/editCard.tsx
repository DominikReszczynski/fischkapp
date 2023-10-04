import React, { useState } from 'react';
import binIcon from '../../../images/Kind=Delete.svg';
import styles from './editCard.module.css';
import { Card, URL_FISCHKAPP, URL_TOKEN } from '../../../App';

interface EditCardProps {
  front: string;
  back: string;
  index: number;
  id: string;
  cards: Card[];
  setCards: (cards: Card[]) => void;
  closeEdit: () => void;
  onAddCard: () => void;
}

export const EditCard: React.FC<EditCardProps> = ({
  front,
  back,
  index,
  id,
  cards,
  setCards,
  closeEdit,
  onAddCard
}) => {
  const [secondPageVisable, setSecondPageVisable] = useState<boolean>(true);
  const [firstWord, setFirstWord] = useState<string>('');
  const [secondWord, setSecondWord] = useState<string>('');

  const changeWordsOnCard = () => {
    const updatedCards: Card[] = [...cards];
    const updatedWords = { front: firstWord , back: secondWord };
    if (updatedCards[index]) {
      updatedCards[index].front = updatedWords.front;
      updatedCards[index].back = updatedWords.back;
      setCards(updatedCards);
    }
    setCards(updatedCards);
  };
  const editCard = () => {
    const data = {
      id: id,
      front: firstWord,
      back: secondWord
    };
  
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Authorization': URL_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(`${URL_FISCHKAPP}/${id}`, requestOptions)
      .then(response => {
        if(!response.ok) {
          console.log(response)
          throw new Error('Wstąpił błąd podczas aktualizacji')
        }
        return response.json();
      })
      .then(data => {
        console.log("odpowiedź serwera na aktualizację:", data)
        setFirstWord('');
        setSecondWord('');
        onAddCard();
      })
      .catch(error => {
        console.error('Błąd:', error)
      })
    }
  return (
    <>
      {secondPageVisable && (
        <div className={styles.cardConteinerNext}>
          <textarea
            placeholder={front}
            className={styles.inputText}
            onChange={(e) => setFirstWord(e.target.value)}
          ></textarea>
          <div>
            <button className={styles.btnCancel} onClick={() => closeEdit()}>
              CANCEL
            </button>
            <button
              className={styles.btnConfirm}
              onClick={() => setSecondPageVisable(false)}
            >
              NEXT
            </button>
          </div>
        </div>
      )}
      {!secondPageVisable && (
        <div className={styles.cardConteinerSave}>
          <textarea
            className={styles.inputText}
            placeholder={back}
            onChange={(e) => setSecondWord(e.target.value)}
          ></textarea>
          <div>
            <button
              className={styles.btnCancel}
              onClick={() => setSecondPageVisable(true)}
            >
              BACK
            </button>
            <button
              className={styles.btnConfirm}
              onClick={() => {
                closeEdit();
                changeWordsOnCard();
                editCard()
              }}
            >
              SAVE
            </button>
          </div>
        </div>
      )}
    </>
  );
};
