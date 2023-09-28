import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

// Tworzymy serwer HTTP Mock, aby obsłużyć żądanie GET do naszej usługi API (mockowanej)
const server = setupServer(
  rest.get('https://training.nerdbord.io/api/v1/fischkapp/flashcards', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { _id: 'card1Id', front: 'Front 1', back: 'Back 1' },
        { _id: 'card2Id', front: 'Front 2', back: 'Back 2' },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
  it('should display flashcards in the list properly', async () => {
    render(<App />);

    // Oczekujemy, że komponent początkowo wyświetli informację "Brak fiszek, dodaj nowe"
    const noCardsMessage = screen.getByText('Brak fiszek, dodaj nowe');
    expect(noCardsMessage).toBeInTheDocument();

    // Czekamy na dane fiszek pobrane z serwera i sprawdzamy, czy są wyświetlane poprawnie
    const front1 = await screen.findByText('Front 1');
    const back1 = await screen.findByText('Back 1');
    const front2 = await screen.findByText('Front 2');
    const back2 = await screen.findByText('Back 2');

    expect(front1).toBeInTheDocument();
    expect(back1).toBeInTheDocument();
    expect(front2).toBeInTheDocument();
    expect(back2).toBeInTheDocument();
  });
});