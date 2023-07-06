import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTrash } from 'react-icons/fa';
import Table from './components/Table';
import FilterName from './components/FilterName';
import Fetch from './hooks/useFetch';
import Filter from './components/Filter';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [valueFilter, setValueFilter] = useState(0);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valuesColumns, setValuesColumns] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await Fetch('https://swapi.dev/api/planets');
      setPlanets(data);
      setFilteredPlanets(data);
    };

    fetchPlanets();
  }, []);

  useEffect(() => {
    const newPlanets = planets.filter((e) => e.name.includes(nameFilter));
    setFilteredPlanets(newPlanets);
  }, [nameFilter, planets]);

  const handleNameFilter = ({ target }) => {
    setNameFilter(target.value);
  };

  const handleValueFilter = ({ target }) => {
    setValueFilter(target.value);
  };

  const handleColumnFilter = ({ target }) => {
    setColumnFilter(target.value);
  };

  const handleComparisonFilter = ({ target }) => {
    setComparisonFilter(target.value);
  };

  const clickFilter = () => {
    if (valuesColumns.length !== 0) {
      listFilter.push({
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      });
      listFilter.forEach((list) => {
        const filterPlanets = filteredPlanets.filter((e) => {
          if (list.comparison === 'maior que') {
            return Number(e[list.column]) > list.value;
          }
          if (list.comparison === 'menor que') {
            return Number(e[list.column]) < list.value;
          }
          if (list.comparison === 'igual a') {
            return e[list.column] === list.value;
          }
          return false;
        });
        const newValuesColumns = valuesColumns.filter((item) => item !== list.column);
        setColumnFilter(newValuesColumns[0]);
        setValuesColumns(newValuesColumns);
        setFilteredPlanets(filterPlanets);
      });
      setListFilter(listFilter);
    }
  };

  const clearFilter = () => {
    setValuesColumns(['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
    setColumnFilter('population');
    setListFilter([]);
    setFilteredPlanets(planets);
  };

  const removeFilter = (id) => {
    const newFilter = listFilter.filter((e) => e.column !== id);
    if (newFilter.length === 0) {
      setFilteredPlanets(planets);
    } else {
      newFilter.forEach((list) => {
        const filterPlanets = planets.filter((e) => {
          if (list.comparison === 'maior que') {
            return Number(e[list.column]) > list.value;
          }
          if (list.comparison === 'menor que') {
            return Number(e[list.column]) < list.value;
          }
          if (list.comparison === 'igual a') {
            return e[list.column] === list.value;
          }
          return false;
        });
        const newValuesColumns = valuesColumns.filter((item) => item !== list.column);
        setColumnFilter(newValuesColumns[0]);
        setValuesColumns(newValuesColumns);
        setFilteredPlanets(filterPlanets);
      });
    }
    setValuesColumns(valuesColumns);
    setColumnFilter(valuesColumns[0]);
    setListFilter(newFilter);
  };

  return (
    <>
      <FilterName
        onFilter={ handleNameFilter }
        value={ nameFilter }
      />
      <br />
      <Filter
        value={ valueFilter }
        handleValueFilter={ handleValueFilter }
        handleColumnFilter={ handleColumnFilter }
        handleComparisonFilter={ handleComparisonFilter }
        onClickFilter={ clickFilter }
        valuesColumns={ valuesColumns }
        clearFilter={ clearFilter }
      />
      <br />
      {
        listFilter.map((e) => (
          <div
            className="listFilters"
            key={ e.column }
            data-testid="filter"
          >
            <p>
              {`${e.column} ${e.comparison} ${e.value}`}

            </p>
            <button
              onClick={ () => removeFilter(e.column) }
            >
              <FaTrash />
            </button>
          </div>
        ))
      }
      <Table planets={ filteredPlanets } />
    </>
  );
}

export default App;
