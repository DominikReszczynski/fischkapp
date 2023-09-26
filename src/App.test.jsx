import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]), 
  })
);

test('renders the App component', async () => {
  render(<App />);

  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

  const headerElement = screen.getByText(/Fischkapp Flashcards/i);
  expect(headerElement).toBeInTheDocument();

  const addButtonElement = screen.getByText(/Add Card/i);
  expect(addButtonElement).toBeInTheDocument();

  const noFlashcardsMessage = screen.getByText(/Brak fiszek, dodaj nowe/i);
  expect(noFlashcardsMessage).toBeInTheDocument();

  fireEvent.click(addButtonElement);

  const cardAddForm = screen.getByText(/Front:/i);
  expect(cardAddForm).toBeInTheDocument();
});