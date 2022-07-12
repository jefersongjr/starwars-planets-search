import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function SelectFilter() {
  const { filterByNumericValues, handleChangeSelect } = useContext(planetsContext);
  return (
    <section>
      <select
        name="column"
        value={ filterByNumericValues }
        data-testid="column-filter"
        onChange={ handleChangeSelect }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        name="comparasion"
        value={ filterByNumericValues }
        data-testid="comparison-filter"
        onChange={ handleChangeSelect }
      >
        <option>Maior Que</option>
        <option>Menor Que</option>
        <option>Igual a</option>
      </select>

      <input
        type="number"
        name="value"
        data-testid="value-filter"
      />

    </section>
  );
}

export default SelectFilter;
