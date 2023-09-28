import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { NormalCard } from './NormalCard';

// Tworzymy serwer HTTP Mock, aby obsłużyć żądanie DELETE do naszej usługi API (mockowanej)
const server = setupServer(
  rest.delete('http://example.com/api/fischkapp/:id', (req, res, ctx) => {
    const { id } = req.params;
    if (id === 'cardToDeleteId') {
      return res(ctx.json({ success: true }));
    }
    return res(ctx.status(404), ctx.json({ error: 'Card not found' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('NormalCard', () => {
  it('should delete flashcard from the list when clicking on Trash icon', async () => {
    const cards = [
      { front: 'Front 1', back: 'Back 1', id: 'card1Id' },
      { front: 'Front 2', back: 'Back 2', id: 'cardToDeleteId' },
      { front: 'Front 3', back: 'Back 3', id: 'card3Id' },
    ];
    const setCards = jest.fn();

    render(
      <NormalCard
        front="Front 2"
        back="Back 2"
        id="cardToDeleteId"
        cards={cards}
        setCards={setCards}
      />
    );

    const trashIcon = screen.getByAltText('bin');
    fireEvent.click(trashIcon);

    // Oczekujemy, że funkcja `setCards` zostanie wywołana z odpowiednimi argumentami
    await waitFor(() => {
      expect(setCards).toHaveBeenCalledWith([
        { front: 'Front 1', back: 'Back 1', id: 'card1Id' },
        { front: 'Front 3', back: 'Back 3', id: 'card3Id' },
      ]);
    });
  });
});