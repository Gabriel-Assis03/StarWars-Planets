import React, { useEffect, useState } from 'react';
import Fetch from '../hooks/useFetch';

function Table() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await Fetch('https://swapi.dev/api/planets');
      setPlanets(data);
    };

    fetchPlanets();
  }, []);

  console.log(planets);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
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
        {
          planets.map((e, index) => (
            <tr key={ index }>
              <td>{ e.name }</td>
              <td>{ e.rotation_period }</td>
              <td>{ e.orbital_period }</td>
              <td>{ e.diameter }</td>
              <td>{ e.climate }</td>
              <td>{ e.gravity }</td>
              <td>{ e.terrain }</td>
              <td>{ e.surface_water }</td>
              <td>{ e.population }</td>
              <td>
                { e.films.map((e2, index2) => (
                  <>
                    <p key={ index2 }>
                      {e2}
                    </p>
                    <br />

                  </>
                )) }
              </td>
              <td>{ e.created }</td>
              <td>{ e.edited }</td>
              <td>{ e.url }</td>
            </tr>
          ))
        }
        {/* <tr>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
          <td>{ planets.name }</td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default Table;
