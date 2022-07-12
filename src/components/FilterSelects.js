import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function SelectFilter() {
  const { filterByNumericValues,
    handleChangeSelect, handleChangeNumber, saveFilters } = useContext(planetsContext);
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
        <option>maior Que</option>
        <option>menor Que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        name="value"
        value={ filterByNumericValues.value }
        data-testid="value-filter"
        onChange={ handleChangeNumber }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ saveFilters }
      >
        Filtrar
      </button>

    </section>
  );
}

export default SelectFilter;
