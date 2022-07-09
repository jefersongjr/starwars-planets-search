import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import InputFilterName from './components/InputFilterName';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <main className="main-container">
        <InputFilterName />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
