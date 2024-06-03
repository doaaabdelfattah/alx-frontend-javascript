export default function getStudentIdsSum(studentList) {
  const initialValue = 0;
  function sum(accumulator, student) {
    return accumulator + student.id;
  }
  const result = studentList.reduce(sum, initialValue);
  return result;
}
