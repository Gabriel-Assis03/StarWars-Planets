import React from 'react';
import propTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      value,
      handleValueFilter,
      handleColumnFilter,
      handleComparisonFilter,
      onClickFilter,
      valuesColumns,
    } = this.props;
    return (
      <>
        <select data-testid="column-filter" onChange={ handleColumnFilter }>
          {
            valuesColumns.map((e) => (
              <option
                key={ e }
                value={ e }
              >
                { e }

              </option>
            ))
          }
          {/* <option
            value="population"
          >
            population

          </option>
          <option
            value="orbital_period"
          >
            orbital_period

          </option>
          <option
            value="diameter"
          >
            diameter

          </option>
          <option
            value="rotation_period"
          >
            rotation_period

          </option>
          <option
            value="surface_water"
          >
            surface_water

          </option> */}
        </select>
        <select data-testid="comparison-filter" onChange={ handleComparisonFilter }>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ handleValueFilter }
          value={ value }
        />
        <button
          data-testid="button-filter"
          onClick={ onClickFilter }
        >
          Filter

        </button>
      </>
    );
  }
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  handleValueFilter: propTypes.func.isRequired,
  valuesColumns: propTypes.string.isRequired,
  handleColumnFilter: propTypes.func.isRequired,
  handleComparisonFilter: propTypes.func.isRequired,
  onClickFilter: propTypes.func.isRequired,
};

export default Filter;
