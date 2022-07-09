import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function InputFilterName() {
  const { filterByName, handleChange } = useContext(planetsContext);
  return (
    <section>
      <input
        type="text"
        name="filterByName"
        value={ filterByName }
        onChange={ handleChange }
      />
    </section>
  );
}

export default InputFilterName;
