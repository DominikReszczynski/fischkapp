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
  const [cards, setCards] = useState<Flashcard[]>([
    {front: 'dom', back: 'home'},
    {front: 'sklep', back:'shop'}]);
  const [isAddingCard, setAdding] = useState(false);
  console.log(cards[0])
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
              {console.log(cards[index].front)}
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
