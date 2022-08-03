const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(personId) {
  const specieId = data.employees.find(({ id }) => id === personId).responsibleFor[0];

  const animals = data.species.find(({ id }) => id === specieId).residents;

  const oldestAnimal = animals.sort((a, b) => b.age - a.age)[0];

  return Object.keys(oldestAnimal).map((i) => oldestAnimal[i]);
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
