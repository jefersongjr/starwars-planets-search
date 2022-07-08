import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/getApiPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const results = await getPlanets();
      const filterResults = results.filter((item) => delete item.residentes);
      setData(filterResults);
    };
    fetchData();
  }, []);

  return (
    <planetsContext.Provider value={ data }>
      { children }
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetsProvider;
