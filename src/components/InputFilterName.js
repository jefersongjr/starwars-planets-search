import React, { useState } from 'react';

function InputFilterName() {
  const [filterByName, setFilterByName] = useState('');
  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterByName(value);
  };
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
