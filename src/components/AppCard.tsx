import React, { useState } from 'react';
import styles from './AppCard.module.css';
import editIcon from '../images/Kind=Edit.svg';

export const AppCard = () => {
	const textArr: Array<string> = [
		'What is Lorem Ipsum?',
		'Lorem Ipsum is simply dummy text of the printing',
		'and typesetting industry. Lorem Ipsum has been the industry',
		'standard dummy text ever since the 1500s, when an unknown printer',
		'took a galley of type and scrambled it to make a type',
		'specimen book. It has survived not only five centuries, but also the leap',
		'into electronic typesetting, remaining essentially unchanged.',
	];
	const [text, setText] = useState(textArr);

	const reverseText = (index: number) => {
		const newTextArr = [...text];
		newTextArr[index] = newTextArr[index].split('').reverse().join('');
		setText(newTextArr);
	};

	return (
		<div>
			{text.map((item, index) => (
				<button
					className={styles.cardBtn}
					key={index}
					onClick={() => reverseText(index)}
				>
					<div className={styles.card}>
						<div className={styles.editConteiner}>
							<img src={editIcon} alt='edit' />
						</div>
						<h4 className={styles.text}>{item}</h4>
					</div>
				</button>
			))}
		</div>
	);
};
