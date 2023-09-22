import React, { useState } from 'react';
import style from './AppCardAdd.module.css';
import binIcon from '../images/Kind=Delete.svg';
//card
export const AppCardAdd = ({ onAddCard }) => {
	const [secondPageVisable, setSecondPageVisable] = useState<boolean>(true);
	return (
		<>
			{secondPageVisable && (
				<div className={style.cardConteinerNext}>
					<textarea className={style.inputText}></textarea>
					<div>
						<button className={style.btnCancel} onClick={() => null}>
							CANCEL
						</button>
						<button
							className={style.btnConfirm}
							onClick={() => setSecondPageVisable(false)}
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
							<img src={binIcon} alt='binIcon' />
						</button>
					</div>
					<textarea className={style.inputText}></textarea>
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
