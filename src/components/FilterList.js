import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function FilterList() {
  const { savedFilter, removeFilter, removeAllFilters } = useContext(planetsContext);
  return (
    <div className="filterList-container">
      { savedFilter && savedFilter.map((filter) => (
        <p key={ filter.column } data-testid="filter">
          { `${filter.column} ${filter.comparasion} ${filter.value} `}
          <button type="button" name={ filter.column } onClick={ removeFilter }>x</button>
        </p>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => removeAllFilters() }
      >
        Remover Filtros
      </button>
    </div>
  );
}

export default FilterList;
