import React, { useState } from 'react';
// import style from './AppCardEdit.module.css';
import binIcon from '../images/Kind=Delete.svg';
import styles from './AppCard.module.css';
import editIcon from '../images/Kind=Edit.svg';

interface Flashcard {
	front: string;
	back: string;
}

export const AppCard = () => {
	const textArr: Flashcard[] = [
		{ front: 'What is Lorem Ipsum?', back: 'fish' },
		{ front: 'Lorem Ipsum is simply dummy text of the printing', back: 'fish' },
		{
			front: 'and typesetting industry. Lorem Ipsum has been the industry',
			back: 'fish',
		},
		{
			front:
				'standard dummy text ever since the 1500s, when an unknown printer',
			back: 'fish',
		},
		{
			front: 'took a galley of type and scrambled it to make a type',
			back: 'fish',
		},
		{
			front:
				'specimen book. It has survived not only five centuries, but also the leap',
			back: 'fish',
		},
		{
			front: 'into electronic typesetting, remaining essentially unchanged.',
			back: 'fish',
		},
	];

	const [cards, setCards] = useState<Flashcard[]>(textArr);
	const [isEditing, setIsEditing] = useState<boolean[]>(
		Array(textArr.length).fill(false)
	);
	const [editMode, setEditMode] = useState<boolean>(true);
	const [secondPageVisable, setSecondPageVisable] = useState<boolean>(true);
	const toggleCardSide = (index: number) => {
		const newEditingState = [...isEditing];
		newEditingState[index] = !newEditingState[index];
		setIsEditing(newEditingState);
	};

	return (
		<>
			{editMode && (
				<div>
					{cards.map((card, index) => (
						<button
							className={styles.cardBtn}
							key={index}
							onClick={() => toggleCardSide(index)}
						>
							<div className={styles.card}>
								<div className={styles.editConteiner}>
									<button
										onClick={() => {
											console.log('jestem');
											setEditMode(false);
										}}
									>
										<img src={editIcon} alt='edit' />
									</button>
								</div>

								<h4 className={styles.text}>
									{isEditing[index] ? card.back : card.front}
								</h4>
							</div>
						</button>
					))}
				</div>
			)}
			{!editMode && (
				<>
					{secondPageVisable && (
						<div className={styles.cardConteinerNext}>
							<textarea className={styles.inputText}></textarea>
							<div>
								<button
									className={styles.btnCancel}
									onClick={() => setEditMode(true)}
								>
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
									<img src={binIcon} alt='binIcon' />
								</button>
							</div>
							<textarea className={styles.inputText}></textarea>
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
										setEditMode(true), setSecondPageVisable(true);
									}}
								>
									SAVE
								</button>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};
