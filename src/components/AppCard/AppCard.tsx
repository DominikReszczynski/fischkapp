import React, { useEffect, useState } from 'react';
// import styles from './AppCardEdit.module.css';
// import styles from "./AppCard.module.css";

import { EditCard } from './edit/editCard';
import { NormalCard } from './normal/normalCard';
import { Card } from '../../App'

interface AppCardProps {
  front: string;
  back: string;
  index: number;
  id: string;
  cards: Card[];
  setCards: (cards: Card[]) => void;
  onAddCard: () => void;
}

export const AppCard: React.FC<AppCardProps> = ({ front, back, index, id, cards, setCards,  onAddCard }) => {
  const [side, setSide] = useState(true);
  const [isEdit, setEdit] = useState(false);
  
  return (
    <>
      <div>
        {!isEdit && (
          <NormalCard
            side={side}
            isEdit={isEdit}
            changeSide={() => setSide(!side)}
            openEdit={() => setEdit(true)}
            cards={cards}
            setCards={setCards}
            index={index}
            id={id}
          />
        )}
        {isEdit && (
          <EditCard
            front={front}
            back={back}
            index={index}
            id={id}
            setCards={setCards}
            cards={cards}
            closeEdit={() => setEdit(false)}
            onAddCard={ onAddCard}
          />
        )}
      </div>
    </>
  );
};
