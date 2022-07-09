import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import InputFilterName from './components/InputFilterName';

function App() {
  return (
    <PlanetsProvider>
      <InputFilterName />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
