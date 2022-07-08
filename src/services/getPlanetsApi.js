const getPlanetsApi = async () => {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return json;
};

export default getPlanetsApi;
