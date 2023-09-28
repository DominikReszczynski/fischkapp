import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { EditCard } from './EditCard';

// Tworzymy serwer HTTP Mock, aby obsłużyć żądanie PATCH do naszej usługi API (mockowanej)
const server = setupServer(
  rest.patch('http://example.com/api/fischkapp/:id', (req, res, ctx) => {
    const { id, front, back } = req.body;
    if (front === '' || back === '') {
      return res(ctx.status(400), ctx.json({ error: 'Invalid input' }));
    }
    return res(ctx.json({ success: true }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('EditCard', () => {
  it('should not edit a flashcard when edited value is empty', async () => {
    render(<EditCard front="Front Value" back="Back Value" />);

    const nextButton = screen.getByText('NEXT');
    fireEvent.click(nextButton);

    const saveButton = screen.getByText('SAVE');
    fireEvent.click(saveButton);

    // Sprawdzamy, czy widzimy odpowiedni komunikat o błędzie
    await waitFor(() => {
      const errorText = screen.getByText('Invalid input');
      expect(errorText).toBeInTheDocument();
    });
  });

  it('should edit a flashcard when edited value is not empty', async () => {
    render(<EditCard front="Front Value" back="Back Value" />);

    const nextButton = screen.getByText('NEXT');
    fireEvent.click(nextButton);

    const frontInput = screen.getByPlaceholderText('Front Value');
    const backInput = screen.getByPlaceholderText('Back Value');
    fireEvent.change(frontInput, { target: { value: 'Edited Front' } });
    fireEvent.change(backInput, { target: { value: 'Edited Back' } });

    const saveButton = screen.getByText('SAVE');
    fireEvent.click(saveButton);

    // Sprawdzamy, czy nie widzimy komunikatu o błędzie
    await waitFor(() => {
      const errorText = screen.queryByText('Invalid input');
      expect(errorText).not.toBeInTheDocument();
    });
  });

  it('should exit editing mode by clicking cancel button', () => {
    const closeEditMock = jest.fn();
    render(<EditCard front="Front Value" back="Back Value" closeEdit={closeEditMock} />);

    const cancelButton = screen.getByText('CANCEL');
    fireEvent.click(cancelButton);

    // Sprawdzamy, czy funkcja closeEdit została wywołana
    expect(closeEditMock).toHaveBeenCalled();
  });
});