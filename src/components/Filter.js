import React from 'react';
import propTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onFilter, value, onClickFilter } = this.props;
    return (
      <>
        <input
          type="text"
          data-testid="name-filter"
          value={ value }
          onChange={ onFilter }
        />
        <button
          onClick={ onClickFilter }
        >
          Filter

        </button>
      </>
    );
  }
}

Filter.propTypes = {
  onFilter: propTypes.func.isRequired,
  onClickFilter: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default Filter;
