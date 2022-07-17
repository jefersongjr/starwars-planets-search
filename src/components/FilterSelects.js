import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function SelectFilter() {
  const { filterByNumericValues,
    handleChangeSelect, handleChangeNumber, saveFilters,
    usedFilters } = useContext(planetsContext);
  return (
    <section>
      <select
        name="column"
        value={ filterByNumericValues.column }
        data-testid="column-filter"
        onChange={ handleChangeSelect }
      >
        { !usedFilters.includes('population') && <option>population</option>}
        { !usedFilters.includes('orbital_period') && <option>orbital_period</option> }
        { !usedFilters.includes('diameter') && <option>diameter</option>}
        { !usedFilters.includes('rotation_period') && <option>rotation_period</option> }
        { !usedFilters.includes('surface_water') && <option>surface_water</option>}
      </select>

      <select
        name="comparasion"
        value={ filterByNumericValues.comparasion }
        data-testid="comparison-filter"
        onChange={ handleChangeSelect }
      >
        <option>maior que</option>
        <option>menor que</option>
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
