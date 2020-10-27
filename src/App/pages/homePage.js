import React, { useState } from 'react';
import { mockAllStudents, mockStudentsGroups } from '../constants';
import StudentsGroup from '../components/studentsGroup';
import './index.scss';
import '../../style/students.scss';

const HomePage = () => {
  const [allStudents] = useState(mockAllStudents);
  const [studentsGroups] = useState(mockStudentsGroups);

  return (
    <div className="page-container">
      <h2 className="section-title">分组列表</h2>
      <div>
        {studentsGroups.map((studentsArray, index) => (
          <StudentsGroup key={index} students={studentsArray} groupId={index + 1} />
        ))}
      </div>
      <h2 className="section-title">学员列表</h2>
      <div className="all-students-wrapper">
        {allStudents.map(({ id, name }) => (
          <div key={id} className="student">{`${id}. ${name}`}</div>
        ))}
        <div className="student add-student">+ 添加学员</div>
      </div>
    </div>
  );
};

export default HomePage;
