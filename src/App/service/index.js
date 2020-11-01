import axios from 'axios';

// TODO GTB-工程实践: - 可以把http://localhost:8080提出一个公共的变量

export const getAllStudents = () => {
  return axios.get('http://localhost:8080/all');
};
// TODO GTB-工程实践: - getGroupedStudents命名不够准确，因为你实际上返回的是group而不是被分组之后的students
export const getGroupedStudents = () => {
  return axios.get('http://localhost:8080/group');
};

// TODO GTB-工程实践: - sendNewStudent改为newStudent
export const sendNewStudent = (student) => {
  return axios.post(`http://localhost:8080/newStudent/${student}`);
};

export const sendGroupedStudents = (studentsArray) => {
  return axios.post('http://localhost:8080/newGroups', studentsArray);
};
