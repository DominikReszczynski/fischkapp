import React from 'react';
import styles from './normalCard.module.css';
import editIcon from '../../../images/Kind=Edit.svg';
export const NormalCard = ({
  front,
  back,
  side,
  isEdit,
  changeSide,
  openEdit,
}) => {
  return (
    <button
      className={styles.cardBtn}
      onClick={() => (!isEdit ? changeSide() : null)}
    >
      <div className={styles.card}>
        <div className={styles.editConteiner}>
          <button
            onClick={() => {
              console.log('jestem w edit');
              openEdit();
            }}
          >
            <img src={editIcon} alt="edit" />
          </button>
        </div>

        <h4 className={styles.text}>{side ? front : back}</h4>
      </div>
    </button>
  );
};
