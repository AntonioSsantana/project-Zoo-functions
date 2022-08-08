const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const findEmployee = (employee) => (
  employees.find((item) => item.firstName === employee.name || item.lastName === employee.name
    || item.id === employee.id)
);

const findAnimalsReponsibleFor = (employee) =>
  employee.responsibleFor.map((id) => species.find((specie) => (specie.id === id)));

const allEmployees = () => employees.map((employee) => {
  const allAnimals = findAnimalsReponsibleFor(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: allAnimals.map((specie) => specie.name),
    locations: allAnimals.map((specie) => specie.location),
  };
});

function getEmployeesCoverage(employee) {
  if (!employee) {
    return allEmployees();
  }

  const selectEmployee = findEmployee(employee);

  if (selectEmployee === undefined) {
    throw new Error('Inválido');
  }

  const relatedAnimals = findAnimalsReponsibleFor(selectEmployee);

  return {
    id: selectEmployee.id,
    fullName: `${selectEmployee.firstName} ${selectEmployee.lastName}`,
    species: relatedAnimals.map((specie) => specie.name),
    locations: relatedAnimals.map((specie) => specie.location),
  };
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
