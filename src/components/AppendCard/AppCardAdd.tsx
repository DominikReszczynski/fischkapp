
import React, { useEffect, useState } from 'react';
import style from './AppCardAdd.module.css';
import binIcon from '../../images/Kind=Delete.svg';
import { URL_FISCHKAPP, URL_TOKEN } from '../../App';

export const AppCardAdd = ({ onAddCard, setCards, cards }) => {
  const [secondPageVisible, setSecondPageVisible] = useState<boolean>(true);
  const [firstWord, setFirstWord] = useState<string>('');
  const [secondWord, setSecondWord] = useState<string>('');

  const addCard = () => {
    const data = {
      front: firstWord,
      back: secondWord
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': URL_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(URL_FISCHKAPP, requestOptions)
      .then(response => {
        if (!response.ok) {
          console.log(response);
          throw new Error('Wystąpił błąd podczas wysyłania żądania.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Odpowiedź serwera:', data);
        setFirstWord(''); // Czyścimy pola po dodaniu karty
        setSecondWord('');
        onAddCard(); // Wywołujemy onAddCard, aby zaktualizować stan isAddingCard
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  };

  return (
    <>
      {secondPageVisible && (
        <div className={style.cardConteinerNext}>
          <textarea
            placeholder={firstWord}
            className={style.inputText}
            onChange={(e) => setFirstWord(e.target.value)}
          ></textarea>
          <div>
            <button className={style.btnCancel} onClick={() => null}>
              CANCEL
            </button>
            <button
              className={style.btnConfirm}
              onClick={() => (
                setSecondPageVisible(false)
              )}
            >
              NEXT
            </button>
          </div>
        </div>
      )}
      {!secondPageVisible && (
        <div className={style.cardConteinerSave}>
          <div className={style.saveHeader}>
          </div>
          <textarea
            placeholder={secondWord}
            className={style.inputText}
            onChange={(e) => setSecondWord(e.target.value)}
          ></textarea>
          <div>
            <button
              className={style.btnCancel}
              onClick={() => setSecondPageVisible(true)}
            >
              BACK
            </button>
            <button
              className={style.btnConfirm}
              onClick={() => {
                setSecondPageVisible(true);
                addCard();
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