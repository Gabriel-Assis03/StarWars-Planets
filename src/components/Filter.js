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
      clearFilter,
    } = this.props;
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
          <p>ordem</p>
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
};

export default Filter;
