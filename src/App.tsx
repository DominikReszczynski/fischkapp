import React, { useState } from 'react';

import { AppHeader } from './components/Header/AppHeader';
import { AppLayout } from './components/AppLayout';
import { AppCardAdd } from './components/AppendCard/AppCardAdd';
import { AppCard } from './components/AppCard/AppCard';

import './App.css';

interface Flashcard {
  front: string;
  back: string;
}

function App() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [isAddingCard, setAdding] = useState(false);
  console.log('moje karty:', cards);
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
                  front={item?.front}
                  index={index}
                  back={item.back}
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
