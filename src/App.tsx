import React, { useEffect, useState } from 'react';
import './App.css';

import { AppHeader } from './components/Header/AppHeader';
import { AppLayout } from './components/AppLayout';
import { AppCardAdd } from './components/AppendCard/AppCardAdd';
import { AppCard } from './components/AppCard/AppCard';

export const URL_FISCHKAPP = 'https://training.nerdbord.io/api/v1/fischkapp/flashcards'
export const URL_TOKEN = 'secret_token';

interface Flashcard {
  id: string,
  front: string;
  back: string;
}

function App() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [isAddingCard, setAdding] = useState(false);

  useEffect(() => {
    fetch(URL_FISCHKAPP)
      .then(response => {
        if (!response.ok) {
          throw new Error('Wystąpił błąd podczas wysyłania żądania.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Odpowiedź serwera:', data);
        setCards([])
        const newCards = data.map(item => ({
          id: item._id,
          front: item.front,
          back: item.back
        }));
        setCards(newCards);
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  }, [isAddingCard]); 

  console.log('Odpowiedź serwera:', cards);

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
            {cards.map((item,index) => {
              return (
                <AppCard
                  key={index}
                  front={item.front}
                  index={index}
                  id={item.id}
                  back={item.back}
                  cards={cards}
                  setCards={setCards}
                  onAddCard={() => setAdding(false)}
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