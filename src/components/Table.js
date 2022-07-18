import React, { useContext } from 'react';
import '../styles/Table.css';
import planetsContext from '../context/planetsContext';
import Carregando from './Carregando';

function Table() {
  const { loading, filterByName, filteredData } = useContext(planetsContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation</th>
            <th>Orbital</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { loading ? <Carregando /> : (
            filteredData.filter((x) => (
              x.name.includes(filterByName))).map((item) => (
              (
                <tr data-testid="table-row" key={ item.name }>
                  <td>{ item.name }</td>
                  <td>{ item.rotation_period }</td>
                  <td>{ item.orbital_period }</td>
                  <td>{ item.diameter }</td>
                  <td>{ item.climate }</td>
                  <td>{ item.gravity }</td>
                  <td>{ item.terrain }</td>
                  <td>{ item.surface_water }</td>
                  <td>{ item.population }</td>
                  <td>{ item.films }</td>
                  <td>{ item.created }</td>
                  <td>{ item.edited }</td>
                  <td>{ item.url }</td>
                </tr>)
            )))}
        </tbody>
      </table>

    </div>
  );
}

export default Table;
