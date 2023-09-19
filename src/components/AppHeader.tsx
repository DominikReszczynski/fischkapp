import React, { useState } from 'react';
import styles from './AppHeader.module.css';
import fischkappLogo from '../images/fischkappLogo.svg';
import plusIcon from '../images/plusIcon.svg';

export const AppHeader = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<header className={styles.headerConteiner}>
			<a href='' target='_blank'>
				<img src={fischkappLogo} className={styles.logo} alt='Fischkapp logo' />
			</a>
			<p className={styles.cardInfo}>{`Cards :${count}`}</p>
			<button
				className={styles.plusBtn}
				// onClick={() => setCount((count) => count + 1)}
			>
				<img src={plusIcon} alt='plusIcon' />
			</button>
		</header>
	);
};
