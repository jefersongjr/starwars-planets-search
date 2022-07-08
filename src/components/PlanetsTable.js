import React from 'react';
import PlanetContext from '../context/PlanetsContext';

function PlanetTable() {
  return (
    <PlanetContext.Consumer>
      {({ planetsAPI }) => (
        <span>Hello, Jedi!</span>
      )}
    </PlanetContext.Consumer>
  );
}

export default PlanetTable;
