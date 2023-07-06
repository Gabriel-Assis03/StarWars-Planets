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
      disabledColumn,
    } = this.props;
    return (
      <>
        <select data-testid="column-filter" onChange={ handleColumnFilter }>
          <option
            value="population"
            style={ { display: disabledColumn[0].style } }
            disabled={ disabledColumn[0].disabled }
          >
            population

          </option>
          <option
            value="orbital_period"
            style={ { display: disabledColumn[1].style } }
            disabled={ disabledColumn[1].disabled }
          >
            orbital_period

          </option>
          <option
            value="diameter"
            style={ { display: disabledColumn[2].style } }
            disabled={ disabledColumn[2].disabled }
          >
            diameter

          </option>
          <option
            value="rotation_period"
            style={ { display: disabledColumn[3].style } }
            disabled={ disabledColumn[3].disabled }
          >
            rotation_period

          </option>
          <option
            value="surface_water"
            style={ { display: disabledColumn[4].style } }
            disabled={ disabledColumn[4].disabled }
          >
            surface_water

          </option>
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
  disabledColumn: propTypes.string.isRequired,
  handleColumnFilter: propTypes.func.isRequired,
  handleComparisonFilter: propTypes.func.isRequired,
  onClickFilter: propTypes.func.isRequired,
};

export default Filter;
