async function Fetch(link) {
  let planet;
  await fetch(link)
    .then((response) => response.json())
    .then((data) => { planet = data; });
  planet.results.forEach((e) => {
    delete e.residents;
  });
  return planet.results;
}

export default Fetch;
