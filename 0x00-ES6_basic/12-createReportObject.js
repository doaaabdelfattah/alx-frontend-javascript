export default function createReportObject(employeesList) {
  const employee = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },

  };

  return employee;
}
