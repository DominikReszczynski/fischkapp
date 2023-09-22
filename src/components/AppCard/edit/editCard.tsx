import React, { useState } from 'react';
import binIcon from '../../../images/Kind=Delete.svg';
import styles from './editCard.module.css';

export const EditCard = ({
  front,
  back,
  index,
  cards,
  setCards,
  closeEdit,
}) => {
  const [secondPageVisable, setSecondPageVisable] = useState<boolean>(true);
  const [firstWord, setFirstWord] = useState<string>('');
  const [secondWord, setSecondWord] = useState<string>('');
  console.log(front);
  const changeWordsOnCard = () => {
    const updatedCards = [...cards];
    const updatedWords = { front: { firstWord }, back: { secondWord } };
    updatedCards[index] = updatedWords;
    setCards(updatedCards);
  };
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
          <div className={styles.saveHeader}>
            <button className={styles.binBtn}>
              <img src={binIcon} alt="binIcon" />
            </button>
          </div>
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
