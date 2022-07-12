import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/getApiPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState({});

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterByName(value);
  };

  const handleChangeSelect = ({ target }) => {
    const { value, name } = target;
    setFilterByNumericValues((oldState) => ({ ...oldState, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPlanets().then((resp) => {
        setData(resp);
        setLoading(false);
      });
    };
    fetchData();
  }, []);

  return (
    <planetsContext.Provider
      value={ { data,
        loading,
        filterByName,
        handleChange,
        filterByNumericValues,
        handleChangeSelect } }
    >
      { children }
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetsProvider;
