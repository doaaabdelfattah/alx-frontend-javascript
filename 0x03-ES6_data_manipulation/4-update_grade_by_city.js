export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter students by city
  const students = studentList.filter((item) => item.location === city);
  // Add grade element
  for (const student of students) {
    student.grade = 'N/A';
  }
  // Map over the filtered students to update their grades
  const newStudents = students.map((student) => {
    // Find the corresponding grade object for the current student
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
      // Update grades based on newGrades
        student.grade = grade.grade;
      }
    }
    return student;
  });
  return newStudents;
}
