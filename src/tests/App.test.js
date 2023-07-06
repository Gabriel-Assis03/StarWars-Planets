import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('teste o About', () => {
  it('test buttons', () => {
    render(<App />);
    const buttonFilter = screen.getByText('Filter');
    const buttonOrder = screen.getByText('Order');
    const buttonDesc = screen.getByText('descendente');
    const buttonAsc = screen.getByText('ascendente');
    userEvent.click(buttonFilter);
    userEvent.click(buttonOrder);
    userEvent.click(buttonDesc);
    userEvent.click(buttonAsc);
  });
  it('test name filter', () => {
    render(<App />);
    const inputElement = screen.getByTestId('name-filter');
    userEvent.type(inputElement, 'oi');
    expect(inputElement.value).toBe('oi');
  });
  it('test value filter', () => {
    render(<App />);
    const inputElement = screen.getByTestId('value-filter');
    userEvent.type(inputElement, '10');
    expect(inputElement.value).toBe('010');
  });
  it('test btn clear filter', () => {
    render(<App />);
    const btnClearFilter = screen.getByTestId('button-remove-filters');
    userEvent.click(btnClearFilter);
  });
  it('test btn remove filter', () => {
    render(<App />);
    const btnfilter = screen.getByText('Filter');
    userEvent.click(btnfilter);
    userEvent.click(btnfilter);
    const btnRemoveFilter = screen.getByTestId('remove-filter0');
    userEvent.click(btnRemoveFilter);
  });
  it('test btn remove filter', () => {
    render(<App />);
    const btnfilter = screen.getByText('Filter');
    userEvent.click(btnfilter);
    const btnRemoveFilter = screen.getByTestId('remove-filter0');
    userEvent.click(btnRemoveFilter);
  });
  it('test btn remove filter', () => {
    render(<App />);
    const btnOrder = screen.getByTestId('column-sort-button');
    const buttonAsc = screen.getByText('ascendente');
    userEvent.click(buttonAsc);
    userEvent.click(btnOrder);
  });
});
