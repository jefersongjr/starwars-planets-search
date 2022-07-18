import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockData from '../services/mockData';


const mockFetch = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(mockData),
    }));
};

describe('1-teste se é feita a chamada da API ', () => {
  beforeEach(mockFetch)
  afterEach(() => jest.clearAllMocks());
  test('teste se é feita a requisição da API', async () => {
    render(<App />);
    const loading = screen.queryByAltText('bb-8')

    expect(spy).toBeCalled();

  });
});

describe('2- teste o forms de filtros é renderizado', () => {
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
});

describe('2-teste se é feita a chamada da API ', () => {
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
});