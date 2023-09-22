import React, { useState } from "react";
import binIcon from "../../../images/Kind=Delete.svg";
import styles from "./editCard.module.css";

export const EditCard = ({ front, back, side, isEdit, closeEdit }) => {
  return (
    <div className={styles.cardConteinerSave}>
      <div className={styles.saveHeader}>
        <button className={styles.binBtn}>
          <img src={binIcon} alt="binIcon" />
        </button>
      </div>
      <textarea
        className={styles.inputText}
        placeholder={isEdit ? (side ? back : front) : ""}
      ></textarea>
      <div>
        <button className={styles.btnCancel} onClick={() => closeEdit()}>
          BACK
        </button>
        <button
          className={styles.btnConfirm}
          onClick={() => {
            closeEdit();
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};
