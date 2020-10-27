import React, { useState } from 'react';
import { mockAllStudents } from '../constants';

const HomePage = () => {
  const [allStudents] = useState(mockAllStudents);

  return (
    <div>
      <h2>分组列表</h2>
      <h2>学员列表</h2>
      <div>
        {allStudents.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
        <div>添加学员</div>
      </div>
    </div>
  );
};

export default HomePage;
