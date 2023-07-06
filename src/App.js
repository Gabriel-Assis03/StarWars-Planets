import React, { useState, useEffect } from 'react';
import './App.css';
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
      setFilteredPlanets(filterPlanets);
    });
    setListFilter(listFilter);
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
      />
      <br />
      {
        listFilter.map((e) => (
          <p
            key={ e }
          >
            {`${e.column} ${e.comparison} ${e.value}`}

          </p>
        ))
      }
      <Table planets={ filteredPlanets } />
    </>
  );
}

export default App;
