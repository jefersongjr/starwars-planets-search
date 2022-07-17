import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import InputFilterName from './components/InputFilterName';
import SelectFilter from './components/FilterSelects';
import FilterList from './components/FilterList';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <main className="main-container">
        <InputFilterName />
        <SelectFilter />
        <FilterList />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
