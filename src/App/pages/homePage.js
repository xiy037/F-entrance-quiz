import React, { useState, useEffect } from 'react';
import { mockAllStudents, mockStudentsGroups } from '../constants';
import StudentsGroup from '../components/studentsGroup';
import { getAllStudents, getGroupedStudents } from '../service';
import './index.scss';
import '../../style/students.scss';

const HomePage = () => {
  const [allStudents, setAllStudents] = useState(mockAllStudents);
  const [studentsGroups, setStudentsGroups] = useState(mockStudentsGroups);
  const [showInput, setShowInput] = useState(false);
  const [inputName, setInputName] = useState('');
  const [newStudent, setNewStudent] = useState('');

  useEffect(() => {
    getAllStudents().then((data) => console.log('ALL', data));
    getGroupedStudents().then((data) => console.log('GROUP', data));
  }, []);

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

  const showAddStudentInput = () => {
    setShowInput(true);
  };

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  const addNewStudent = () => {
    setNewStudent(inputName);
    setAllStudents((prevState) => {
      return [
        ...prevState,
        {
          id: prevState.length + 1,
          name: newStudent,
        },
      ];
    });
    setShowInput(false);
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
        <button type="button" className="student add-student" onClick={showAddStudentInput}>
          + 添加学员
        </button>
      </div>
      {showInput && (
        <div>
          <input
            type="text"
            placeholder="add new student"
            onChange={handleChange}
            value={inputName}
          />
          <button type="button" onClick={addNewStudent}>
            ADD
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
