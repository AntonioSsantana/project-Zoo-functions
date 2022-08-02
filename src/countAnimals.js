const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal || undefined) {
    const animalObj = {};
    data.species.forEach((i) => {
      animalObj[i.name] = i.residents.length;
    });
    return animalObj;
  }
  const specificResidents = data.species.find((i) => i.name === animal.specie).residents; // Retorna os residentes da espécie

  const specificResidentsBySex = specificResidents.filter((i) => i.sex === animal.sex);

  if (Object.entries(animal).length === 1) {
    return specificResidents.length;
  }
  return specificResidentsBySex.length;

}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;


