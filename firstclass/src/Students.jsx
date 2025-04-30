import React from 'react'

const Students = (studentDetails) => {
    const students = studentDetails
    console.log(students)
  return (
    <div>
      <h1>{students.student1.name}</h1>
      <h1>{students.student2.name}</h1>
    </div>
  );
};

export default Students;
