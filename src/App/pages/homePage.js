import React, { useState, useEffect } from 'react';
import { mockAllStudents, mockStudentsGroups } from '../constants';
import StudentsGroup from '../components/studentsGroup';
import {
  getAllStudents,
  getGroupedStudents,
  sendGroupedStudents,
  sendNewStudent,
} from '../service';
import './index.scss';
import '../../style/students.scss';

const HomePage = () => {
  const [allStudents, setAllStudents] = useState([]);
  const [studentsGroups, setStudentsGroups] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [inputName, setInputName] = useState('');

  // TODO GTB-工程实践: - console.log不应该被提交上去
  useEffect(() => {
    getAllStudents()
      .then((res) => {
        console.log('all', res);
        setAllStudents(res.data);
      })
      .catch((e) => {
        console.log('GET ALL ERROR', e);
        setAllStudents(mockAllStudents);
      });

    getGroupedStudents()
      .then((res) => {
        console.log(res.data[0]);
        setStudentsGroups(res.data);
      })
      .catch((e) => {
        console.log('GET GROUPED STUDENTS', e);
        setStudentsGroups(mockStudentsGroups);
      });
    return () => sendGroupedStudents(studentsGroups);
  }, []);

  // TODO: refactor shuffleStudents method, add test if time left
  // TODO GTB-知识点: - 分组应该放到后端去做，而不是前端
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

  const addNewStudent = async () => {
    await sendNewStudent(inputName);
    await setAllStudents((prevState) => {
      return [
        ...prevState,
        {
          id: prevState.length + 1,
          name: inputName,
        },
      ];
    });
    setShowInput(false);
  };

  // TODO GTB-工程实践: - 这个组件太不单一职责了，应该再继续划分子组件
  return (
    <div className="page-container">
      <h2 className="section-title">分组列表</h2>
      <button type="button" className="group-students" onClick={shuffleStudents}>
        分组学员
      </button>
      <div>
        {studentsGroups.map((studentsArray, index) => (
          // TODO GTB-知识点: - groupId,或者说是其他的任何ID都不应该在前端生成
            // TODO GTB-知识点: - 不应该使用index作为列表元素的key
          <StudentsGroup key={index} students={studentsArray} groupId={index + 1} />
        ))}
      </div>
      <h2 className="section-title">学员列表</h2>
      <div className="all-students-wrapper">
        {allStudents.length > 0 &&
          allStudents.map(({ id, name }) => (
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
