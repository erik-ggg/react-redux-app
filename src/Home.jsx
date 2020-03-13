import React from 'react';

import EmployeeList from './components/employees/EmployeeList';
import EmployeeApiActions from './components/EmployeeApiActions';

const Home = () => {
  return (
    <div>
      <EmployeeList />
      <EmployeeApiActions />
    </div>
  );
};

export default Home;
