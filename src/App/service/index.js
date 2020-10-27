import axios from 'axios';

export const getAllStudents = () => {
  return axios.get('http://localhost:8080/all');
};

export const getGroupedStudents = () => {
  return axios.get('http://localhost:8080/group');
};

export const sendNewStudent = (student) => {
  return axios.post(`http://localhost:8080/newStudent/${student}`);
};

export const sendGroupedStudents = (studentsArray) => {
  return axios.post('http://localhost:8080/newGroups', studentsArray);
};
