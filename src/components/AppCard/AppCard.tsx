import React, { useState } from 'react';
// import styles from './AppCardEdit.module.css';
import styles from './AppCard.module.css';

import { EditCard } from './edit/editCard';
import { NormalCard } from './normal/normalCard';

export const AppCard = ({ front, back }) => {
	const [side, setSide] = useState(true);
	const [isEdit, setEdit] = useState(false);
	return (
		<>
			<div>
				{!isEdit && (
					<NormalCard
						front={front}
						back={back}
						side={side}
						isEdit={isEdit}
						changeSide={() => setSide(!side)}
						openEdit={() => setEdit(true)}
					/>
				)}
				{isEdit && (
					<EditCard
						front={front}
						back={back}
						side={side}
						isEdit={isEdit}
						closeEdit={() => setEdit(false)}
					/>
				)}
			</div>
		</>
	);
};
