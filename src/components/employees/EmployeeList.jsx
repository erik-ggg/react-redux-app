import React, { useEffect } from 'react';
// import EmployeesTable from "./EmployeesTable";
import EmployeesTableEditable from './EmployeesTableEditable';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteEmployee,
  updateEmployee,
  addEmployee,
  fetchEmployees
} from '../../redux/slices/employeeSlices';
// Internationalization
import { useTranslation } from 'react-i18next';

const EmployeeList = () => {
  const { t } = useTranslation();

  // Redux
  const data = useSelector(state => state.employees.employees);
  const dispatch = useDispatch();

  const addData = employee => {
    dispatch(addEmployee(employee));
  };

  const deleteData = id => {
    dispatch(deleteEmployee(id));
  };

  const updateData = (id, employee) => {
    dispatch(updateEmployee(id, employee));
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const columns = [
    { title: t('table.headers.first_column'), field: 'firstName' },
    { title: t('table.headers.second_column'), field: 'lastName' },
    { title: t('table.headers.third_column'), field: 'emailId' }
  ];

  return (
    <EmployeesTableEditable
      employees={data}
      columns={columns}
      onAdd={addData}
      onDelete={deleteData}
      onUpdate={updateData}
    />
  );
};

export default EmployeeList;
