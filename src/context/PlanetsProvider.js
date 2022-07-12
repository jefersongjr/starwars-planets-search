import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/getApiPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState({});
  const [savedFilter, setsavedFilter] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterByName(value);
  };

  const handleChangeSelect = ({ target }) => {
    const { value, name } = target;
    setFilterByNumericValues((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleChangeNumber = ({ target }) => {
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

  const saveFilters = () => {
    const { column, comparasion, value } = filterByNumericValues;
    setsavedFilter((oldState) => ([...oldState,
      { column, comparasion, value, filterByName }]));

    savedFilter.forEach((filterObject) => {
      if (filterObject.filterByName) {
        setData(data.filter((x) => x.name.includes(filterByName)));
      }
    });
  };

  return (
    <planetsContext.Provider
      value={ { data,
        loading,
        filterByName,
        handleChange,
        filterByNumericValues,
        handleChangeSelect,
        handleChangeNumber,
        savedFilter,
        saveFilters } }
    >
      { children }
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetsProvider;
