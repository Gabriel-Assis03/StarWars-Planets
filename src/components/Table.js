import React from 'react';
import propTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { planets } = this.props;
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
                <td data-testid="planet-name">{ e.name }</td>
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
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  planets: propTypes.string.isRequired,
};

export default Table;
