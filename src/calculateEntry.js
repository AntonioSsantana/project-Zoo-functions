const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsQuant = {
    child: entrants.filter((i) => i.age < 18).length,
    adult: entrants.filter((i) => i.age >= 18 && i.age < 50).length,
    senior: entrants.filter((i) => i.age >= 50).length,
  };
  return entrantsQuant;
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const priceObj = countEntrants(entrants);

  const { child } = priceObj;
  const { adult } = priceObj;
  const { senior } = priceObj;

  return ((child * 20.99) + (adult * 49.99) + (senior * 24.99));
}

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
