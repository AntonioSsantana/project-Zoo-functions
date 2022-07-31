const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const olderthan = data.species.find((item) => item.name === animal)
    .residents.every((Age) => Age.age >= age);
  return olderthan;
}

console.log(getAnimalsOlderThan('lions', 8));

module.exports = getAnimalsOlderThan;
