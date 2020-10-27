import React, { useState } from 'react';
import { mockAllStudents, mockStudentsGroups } from '../constants';
import StudentsGroup from '../components/studentsGroup';
import './index.scss';
import '../../style/students.scss';

const HomePage = () => {
  const [allStudents] = useState(mockAllStudents);
  const [studentsGroups, setStudentsGroups] = useState(mockStudentsGroups);

  // TODO: refactor shuffleStudents method, add test if time left
  const shuffleStudents = () => {
    const studentsArray = [...allStudents];
    for (let i = studentsArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [studentsArray[i], studentsArray[j]] = [studentsArray[j], studentsArray[i]];
    }
    const groupedStudents = studentsArray.reduce(
      (prev, curr, index) => {
        const groupNum = index % 6;
        prev[groupNum].push(curr);
        return prev;
      },
      [[], [], [], [], [], []]
    );
    setStudentsGroups(groupedStudents);
  };

  return (
    <div className="page-container">
      <h2 className="section-title">分组列表</h2>
      <button type="button" className="group-students" onClick={shuffleStudents}>
        分组学员
      </button>
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
