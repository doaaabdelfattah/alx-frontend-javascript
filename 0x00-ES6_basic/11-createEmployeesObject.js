export default function createEmployeesObject(departmentName, employees) {
  const employObj = {
    [departmentName]: employees,
  };
  return employObj;
}
