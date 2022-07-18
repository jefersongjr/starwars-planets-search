import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function SelectFilter() {
  const { filterByNumericValues,
    handleChangeSelect, handleChangeNumber, saveFilters,
    savedFilter } = useContext(planetsContext);
  const findColumn = (columnType) => !savedFilter.find((x) => x.column === columnType);
  return (
    <section>
      <select
        name="column"
        value={ filterByNumericValues.column }
        data-testid="column-filter"
        onChange={ handleChangeSelect }
      >
        { findColumn('population') && <option>population</option> }
        { findColumn('orbital_period') && <option>orbital_period</option> }
        { findColumn('diameter') && <option>diameter</option> }
        { findColumn('rotation_period') && <option>rotation_period</option> }
        { findColumn('surface_water') && <option>surface_water</option> }
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
