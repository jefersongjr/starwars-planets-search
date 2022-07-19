import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import mockData from '../services/mockData';
import userEvent from '@testing-library/user-event';


describe('1- teste o forms de filtros é renderizado', () => {
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

  test('teste se o botão para adicionar os filtros númericos é renderizado', () => {
    render(<App />);
    const filterSelectButton = screen.getByTestId('button-filter')

   expect(filterSelectButton).toBeInTheDocument();
  });
});

describe('2-  teste se a tabela é renderizada  ', () => {
  test('teste se o header da tabela é renderizado', async () => {
      render(<App />);
    
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Rotation' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Orbital' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Diameter' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Climate' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Gravity' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Terrain' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Surface Water' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Population' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Films' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Created' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Edited' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'URL' })).toBeInTheDocument();
    });

    test('teste se a tabela é renderizado com o numero certo de linhas', async () => {
      render(<App />);
      const row = await screen.findAllByTestId('table-row');
      expect(row).toHaveLength(10);
 
    });
});

describe('3-  teste a funcionalidade dos filtros ', () => {
  test('teste se o filtro por nome funciona corretamente ao digitar "o" ', async () => {
      render(<App />);
      const filterByName = screen.getByTestId('name-filter');
      let row = await screen.findAllByTestId('table-row');
      expect(row).toHaveLength(10);
      expect(filterByName).toBeInTheDocument();

      userEvent.type( filterByName, 'o');
      
      row = await screen.findAllByTestId('table-row');

      expect(row).toHaveLength(7);
    });

    test('teste se adiciona o filtro numérico ao clicar no botão', async () => {
      render(<App />);

      const filterSelectColumn = screen.getByTestId('column-filter')
      const filterSelectComparison = screen.getByTestId('comparison-filter')
      const filterSelectValue = screen.getByTestId('value-filter')
      const filterSelectButton = screen.getByTestId('button-filter')
 
      let row = await screen.findAllByTestId('table-row');
      expect(row).toHaveLength(10);

      userEvent.type( filterSelectColumn, 'diameter');
      userEvent.type( filterSelectComparison, 'maior que');
      userEvent.type( filterSelectValue, '89000');
      fireEvent.click(filterSelectButton);

      const filterList = screen.getByTestId('filter');
      expect(filterList).toBeInTheDocument();

    });
});


