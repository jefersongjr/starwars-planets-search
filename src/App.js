import React from 'react';
import PlanetContext from './context/PlanetsContext';
import './App.css';

function App() {
  const INITIAL_STATE = {
    planetsAPI: [],
  };

  return (
    <PlanetContext.Provider value={ INITIAL_STATE }>
      <span>Hello, Jedi!</span>
    </PlanetContext.Provider>
  );
}

export default App;
