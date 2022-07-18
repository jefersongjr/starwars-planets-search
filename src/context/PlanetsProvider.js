import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/getApiPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparasion: 'maior que',
    value: 0 });
  const [savedFilter, setsavedFilter] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [allColumns, setAllColumns] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

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
    setFilteredData(data);
  }, []);

  useEffect(() => {
    let filteredDatas = [...data];
    savedFilter.forEach((filterObject) => {
      switch (filterObject.comparasion) {
      case 'menor que':
        filteredDatas = filteredDatas.filter((x) => (
          x[filterObject.column] < Number(filterObject.value)));
        break;

      case 'maior que':
        filteredDatas = filteredDatas.filter((x) => (
          x[filterObject.column] > Number(filterObject.value)));
        break;

      case 'igual a':
        filteredDatas = filteredDatas.filter((x) => (
          x[filterObject.column] === filterObject.value));
        break;

      default:
        filteredDatas = data;
        break;
      }
    });
    setFilteredData(filteredDatas);
    setFilterByNumericValues({
      column: allColumns[0], comparasion: 'maior que', value: 0 });
  }, [savedFilter, data]);

  const saveFilters = () => {
    const { column, comparasion, value } = filterByNumericValues;
    if (savedFilter && !savedFilter.find((x) => x.column === column)) {
      setsavedFilter((oldState) => ([...oldState,
        { column, comparasion, value }]));
      const y = allColumns.filter((z) => z !== column);
      setAllColumns(y);
    }
  };

  const removeFilter = ({ target }) => {
    const filterRemove = savedFilter;
    const removeList = filterRemove.filter((filter) => filter.column !== target.name);
    setsavedFilter(removeList);
  };

  const removeAllFilters = () => {
    setsavedFilter([]);
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
        saveFilters,
        filteredData,
        removeFilter,
        removeAllFilters,
      } }
    >
      { children }
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PlanetsProvider;
