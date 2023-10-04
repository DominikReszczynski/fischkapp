
//@ts-nocheck
import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { NormalCard } from './normalCard';

const server = setupServer(
  rest.delete('http://example.com/api/fischkapp/:id', (req, res, ctx) => {
    const { id } = req.params;
    if (id === 'cardToDeleteId') {
      return res(ctx.json({ success: true }));
    }
    return res(ctx.status(404), ctx.json({ error: 'Card not found' }));
  })
);
beforeAll(() => {
  server.listen();
  fetchMock.enableMocks(); // Enable fetch mocks using fetchMock
});

beforeEach(() => {
  fetchMock.resetMocks(); // Reset fetch mocks before each test
  server.resetHandlers();
});
beforeAll(() => server.listen());
// beforeEach(() => fetchMock.reset());
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

    render(<NormalCard
      side={true}
      isEdit={false}
      changeSide={() => {}}
      openEdit={() => {}}
      cards={cards}
      setCards={setCards}
      index={1}
      id="cardToDeleteId"
    />);

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
