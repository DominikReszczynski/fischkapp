import React, { useState } from 'react';

import { AppHeader } from './components/AppHeader';
import { AppLayout } from './components/AppLayout';
import { AppCardAdd } from './components/AppCardAdd';
import { AppCard } from './components/AppCard/AppCard';

import './App.css';

interface Flashcard {
	front: string;
	back: string;
}

function App() {
	const [cards, setCards] = useState([]);
	const [isAddingCard, setAdding] = useState(false);
	return (
		<AppLayout>
			<AppHeader cardsAmount={cards.length} onAddCard={() => setAdding(true)} />
			<div className='content'>
				{isAddingCard && <AppCardAdd onAddCard={() => setAdding(false)} />}
				{!isAddingCard && (
					<>
						<AppCard front='hejka' back='Hey' />
						<AppCard front='Siemka' back='Hey' />
					</>
				)}
			</div>
		</AppLayout>
	);
}

export default App;
