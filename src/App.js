import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import FilterName from './components/FilterName';
import Fetch from './hooks/useFetch';
import Filter from './components/Filter';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
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
    console.log(columnFilter);
    console.log(comparisonFilter);
    console.log(typeof valueFilter);
    const filterPlanets = planets.filter((e) => {
      if (comparisonFilter === 'maior que') {
        return Number(e[columnFilter]) > valueFilter;
      }
      if (comparisonFilter === 'menor que') {
        return Number(e[columnFilter]) < valueFilter;
      }
      if (comparisonFilter === 'igual a') {
        return e[columnFilter] === valueFilter;
      }
      return false;
    });
    setFilteredPlanets(filterPlanets);
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
      <Table planets={ filteredPlanets } />
    </>
  );
}

export default App;
