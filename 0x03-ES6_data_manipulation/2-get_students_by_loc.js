export default function getStudentsByLocation(studentList, givenCity) {
  const result = studentList.filter((student) => student.location === givenCity);
  return result;
}
