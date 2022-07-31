const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const findColaborator = data.employees.find((item) => (item.firstName.includes(employeeName)
  || item.lastName.includes(employeeName) ? item : undefined));
  return findColaborator;
}

console.log(getEmployeeByName('Wilburn'));

module.exports = getEmployeeByName;
