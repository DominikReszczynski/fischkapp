import React, { useEffect, useState } from 'react';
import './App.css';

import { AppHeader } from './components/Header/AppHeader';
import { AppLayout } from './components/AppLayout';
import { AppCardAdd } from './components/AppendCard/AppCardAdd';
import { AppCard } from './components/AppCard/AppCard';

export const URL_FISCHKAPP = 'https://training.nerdbord.io/api/v1/fischkapp/flashcards'
export const URL_TOKEN = 'Twój_tajny_token';

interface Flashcard {
  front: string;
  back: string;
}

function App() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [isAddingCard, setAdding] = useState(false);
  

useEffect(() => {fetch(URL_FISCHKAPP)
  .then(response => {
    if (!response.ok) {
      throw new Error('Wystąpił błąd podczas wysyłania żądania.');
    }
    return response.json();
  })
  .then(data => {
    console.log('Odpowiedź serwera:', data);
    const newCards = [...cards, ...data.map(item => ({ front: item.front, back: item.back }))];
    setCards(newCards);
  })
  .catch(error => {
    console.error('Błąd:', error);
  });
}, [])

  return (
    <AppLayout>
      <AppHeader cardsAmount={cards.length} onAddCard={() => setAdding(true)} />
      <div className="content">
        {isAddingCard && (
          <AppCardAdd
            onAddCard={() => setAdding(false)}
            setCards={setCards}
            cards={cards}
          />
        )}
        {!isAddingCard && (
          <>
            {cards.length === 0 && <p>Brak fiszek, dodaj nowe</p>}
            {cards.map((item, index) => {
              return (
                <AppCard
                  key={index}
                  front={cards[index].front}
                  index={index}
                  back={cards[index].back}
                  cards={cards}
                  setCards={setCards}
                />
              );
            })}
          </>
        )}
      </div>
    </AppLayout>
  );
}

export default App;
