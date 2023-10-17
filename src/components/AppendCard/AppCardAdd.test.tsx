// import React from 'react';
// import fetch from 'node-fetch';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { AppCardAdd } from './AppCardAdd';

// // Tworzymy serwer HTTP Mock, aby obsłużyć żądanie POST do naszej usługi API (mockowanej)
// const server = setupServer(
//   rest.post('http://example.com/api/fischkapp', (req, res, ctx) => {
//     const { front, back } = req.body;
//     if (front === '' || back === '') {
//       return res(ctx.status(400), ctx.json({ error: 'Invalid input' }));
//     }
//     return res(ctx.json({ success: true }));
//   }),
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('AppCardAdd', () => {
//   it('should not add a flashcard when front or back card value is empty', async () => {
//     render(<AppCardAdd />);

//     const nextButton = screen.getByText('NEXT');
//     fireEvent.click(nextButton);

//     const saveButton = screen.getByText('SAVE');
//     fireEvent.click(saveButton);

//     // Sprawdzamy, czy widzimy odpowiedni komunikat o błędzie
//     await waitFor(() => {
//       const errorText = screen.getByText('Invalid input');
//       expect(errorText).toBeInTheDocument();
//     });
//   });

//   it('should add a flashcard when front and back values are present', async () => {
//     render(<AppCardAdd />);

//     const nextButton = screen.getByText('NEXT');
//     fireEvent.click(nextButton);

//     const frontInput = screen.getByPlaceholderText('');
//     const backInput = screen.getByPlaceholderText('');
//     fireEvent.change(frontInput, { target: { value: 'Front Value' } });
//     fireEvent.change(backInput, { target: { value: 'Back Value' } });

//     const saveButton = screen.getByText('SAVE');
//     fireEvent.click(saveButton);

//     // Sprawdzamy, czy nie widzimy komunikatu o błędzie
//     await waitFor(() => {
//       const errorText = screen.queryByText('Invalid input');
//       expect(errorText).not.toBeInTheDocument();
//     });
//   });
// });
