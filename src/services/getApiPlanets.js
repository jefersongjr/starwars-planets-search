const getPlanets = async () => {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  const results = await json.results;
  const resultFilters = await results.filter((item) => delete item.residents);
  return resultFilters;
};

export default getPlanets;
