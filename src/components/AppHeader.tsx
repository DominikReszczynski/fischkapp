import React, { useState } from 'react';
import './AppHeader.css';
import fischkappLogo from '../images/fischkappLogo.svg';
import plusIcon from '../images/plusIcon.svg';

export const AppHeader = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<header className='headerConteiner'>
			<a href='' target='_blank'>
				<img
					src={fischkappLogo}
					className='headerConteiner__logo'
					alt='Fischkapp logo'
				/>
			</a>
			<p className='headerConteiner__cardInfo'>{`Cards:${count}`}</p>
			<button
				className='headerConteiner__plusBtn'
				// onClick={() => setCount((count) => count + 1)}
			>
				<img src={plusIcon} alt='plusIcon' />
			</button>
		</header>
	);
};
