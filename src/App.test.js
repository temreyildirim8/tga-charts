import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button testing intro', async () => {
  fireEvent.click(screen.getByText('My Chart'))

  await waitFor(() => screen.getByRole().classList('button'))

  expect(screen.getByRole('button')).toHaveAttribute('onClick')
})

/*
  If you first check the test code to see if
  we code tests first, this may mean you like
  test-driven development. Why not add one test
  case here.
  This is bonus extra. Do not worry about it 
  if your time is limited.
*/