import React, { useEffect, useState } from 'react';
import style from './AppCardAdd.module.css';
import binIcon from '../../images/Kind=Delete.svg';
//card
export const AppCardAdd = ({ onAddCard, setCards, cards }) => {
  const [secondPageVisable, setSecondPageVisable] = useState<boolean>(true);
  const [firstWord, setFirstWord] = useState<string>('');
  const [secondWord, setSecondWord] = useState<string>('');
  const addCard = () => {
    setCards([...cards, { front: [firstWord], back: [secondWord] }]);
    console.log(`dodaje, cards to: ${cards}, a dodałem ${firstWord} oraz ${secondWord}`)
  };
  
  return (
    <>
      {secondPageVisable && (
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
                setSecondPageVisable(false)
              )}
            >
              NEXT
            </button>
          </div>
        </div>
      )}
      {!secondPageVisable && (
        <div className={style.cardConteinerSave}>
          <div className={style.saveHeader}>
            <button className={style.binBtn}>
              <img src={binIcon} alt="binIcon" />
            </button>
          </div>
          <textarea
            placeholder={secondWord}
            className={style.inputText}
            onChange={(e) => setSecondWord(e.target.value)}
          ></textarea>
          <div>
            <button
              className={style.btnCancel}
              onClick={() => setSecondPageVisable(true)}
            >
              BACK
            </button>
            <button
              className={style.btnConfirm}
              onClick={() => {
                setSecondPageVisable(true);
                onAddCard();
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
