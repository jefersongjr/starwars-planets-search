const getPlanets = async () => {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  console.log(json);
  return json.results;
};

export default getPlanets;
