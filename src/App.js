import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import Fetch from './hooks/useFetch';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

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

  const clickFilter = () => {
  };

  return (
    <>
      <Filter
        onFilter={ handleNameFilter }
        value={ nameFilter }
        onClickFilter={ clickFilter }
      />
      <Table planets={ filteredPlanets } />
    </>
  );
}

export default App;
