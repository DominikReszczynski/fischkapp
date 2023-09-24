import React, { useEffect, useState } from 'react';
// import styles from './AppCardEdit.module.css';
// import styles from "./AppCard.module.css";

import { EditCard } from './edit/editCard';
import { NormalCard } from './normal/normalCard';

export const AppCard = ({ front, back, index, cards, setCards }) => {
  const [side, setSide] = useState(true);
  const [isEdit, setEdit] = useState(false);
  
  return (
    <>
      <div>
        {!isEdit && (
          <NormalCard
            front={front.firstWord}
            back={back.secondWord}
            side={side}
            isEdit={isEdit}
            changeSide={() => setSide(!side)}
            openEdit={() => setEdit(true)}
            cards={cards}
            setCards={setCards}
            index={index}
          />
        )}
        {isEdit && (
          <EditCard
            front={front.firstWord}
            back={back.secondWord}
            index={index}
            setCards={setCards}
            cards={cards}
            closeEdit={() => setEdit(false)}
          />
        )}
      </div>
    </>
  );
};
