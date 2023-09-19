import React from 'react';
import style from './AppCard.module.css';
import binIcon from '../images/Kind=Delete.svg';
export const AppCard = () => {
	return (
		<>
			<div className={style.cardConteinerNext}>
				<textarea className={style.inputText}></textarea>
				<div>
					<button className={style.btnCancel}>CANCEL</button>
					<button className={style.btnConfirm}>NEXT</button>
				</div>
			</div>
			<div className={style.cardConteinerSave}>
				<div className={style.saveHeader}>
					<button className={style.binBtn}>
						<img src={binIcon} alt='binIcon' />
					</button>
				</div>
				<textarea className={style.inputText}></textarea>
				<div>
					<button className={style.btnCancel}>BACK</button>
					<button className={style.btnConfirm}>SAVE</button>
				</div>
			</div>
		</>
	);
};
