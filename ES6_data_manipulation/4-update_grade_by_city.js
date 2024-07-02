export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((obj) => obj.location === city)
    .map((student) => {
      const studentCopy = { ...student };
      for (const Grade of newGrades) {
        if (studentCopy.id === Grade.studentId) {
          studentCopy.grade = Grade.grade;
        }
      }
      if ('grade' in studentCopy) {
        return studentCopy;
      }
      studentCopy.grade = 'N/A';
      return studentCopy;
    });
}
