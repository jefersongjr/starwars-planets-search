import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('teste se Input para filtrar texto é renderizado', () => {
  render(<App />);
  const InputFilterName = screen.getByTestId('name-filter')
  expect(InputFilterName).toBeInTheDocument();
});

test('teste se o formulário de filtro numérico é renderizado', () => {
  render(<App />);
  const filterSelectColumn = screen.getByTestId('column-filter')
  const filterSelectComparison = screen.getByTestId('comparison-filter')
  const filterSelectValue = screen.getByTestId('value-filter')

  expect(filterSelectColumn).toBeInTheDocument();
  expect(filterSelectComparison).toBeInTheDocument();
  expect(filterSelectValue).toBeInTheDocument();


});
