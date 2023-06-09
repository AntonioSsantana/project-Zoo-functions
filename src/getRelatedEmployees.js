const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.find((item) => item === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const colaboratorPerson = (employees.filter((employee) =>
      employee.managers.some((person) => person === managerId)));
    return colaboratorPerson.map((personTwo) => `${personTwo.firstName} ${personTwo.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
