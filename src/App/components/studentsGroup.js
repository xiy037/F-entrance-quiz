import React from 'react';
import './index.scss';

const StudentsGroup = ({ students, groupId }) => {
  console.log('STUDENTS', students);
  return (
    <div className="student-group-container">
      <h2 className="student-group-title">{groupId}组</h2>
      <div className="all-students-wrapper">
        {students.length > 0 &&
          students.map(({ id, name }) => (
            <div key={id} className="student">{`${id}. ${name}`}</div>
          ))}
      </div>
    </div>
  );
};

export default StudentsGroup;
