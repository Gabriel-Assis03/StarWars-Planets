import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('teste o About', () => {
  it('deve renderizar o texto "No favorite Pokémon found"', () => {
    render(<App />);
    const button = screen.getByText('Filter');
    userEvent.click(button);
  });
});
