import React from 'react';
import propTypes from 'prop-types';

class Filter extends React.Component {
  state = {
    column: 'population',
    orderFormat: '',
  };

  handleRadio = ({ target }) => {
    this.setState((prev) => ({
      ...prev,
      orderFormat: target.value,
    }));
  };

  handleColumn = ({ target }) => {
    this.setState((prev) => ({
      ...prev,
      column: target.value,
    }));
  };

  render() {
    const {
      value,
      handleValueFilter,
      handleColumnFilter,
      handleComparisonFilter,
      onClickFilter,
      valuesColumns,
      clearFilter,
      orderClick,
    } = this.props;
    const { column, orderFormat } = this.state;
    const columns = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    return (
      <>
        <div>
          <select data-testid="column-filter" onChange={ handleColumnFilter }>
            {valuesColumns.map((e) => (
              <option
                key={ e }
                value={ e }
              >
                {e}

              </option>
            ))}
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
        </div>
        <div>
          <select data-testid="column-sort" onChange={ this.handleColumn }>
            {columns.map((e) => (
              <option
                key={ e }
                value={ e }
              >
                {e}

              </option>
            ))}
          </select>
          <input
            type="radio"
            id="ASC"
            name="order"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ this.handleRadio }
          />
          <label htmlFor="ASC">ascendente</label>
          <input
            type="radio"
            id="DESC"
            name="order"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ this.handleRadio }
          />
          <label htmlFor="DESC">descendente</label>
          <button
            data-testid="column-sort-button"
            onClick={ () => orderClick(column, orderFormat) }
          >
            Order
          </button>
        </div>
        <button
          data-testid="button-remove-filters"
          onClick={ clearFilter }
        >
          Remove Filters
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
  clearFilter: propTypes.func.isRequired,
  orderClick: propTypes.func.isRequired,
};

export default Filter;
