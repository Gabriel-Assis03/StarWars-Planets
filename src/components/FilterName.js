import React from 'react';
import propTypes from 'prop-types';

class FilterName extends React.Component {
  render() {
    const { onFilter, value } = this.props;
    return (
      <input
        type="text"
        data-testid="name-filter"
        value={ value }
        onChange={ onFilter }
      />
    );
  }
}

FilterName.propTypes = {
  onFilter: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default FilterName;
