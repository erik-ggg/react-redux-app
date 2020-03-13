import { employeesLogsRef, timestamp } from '../../../firebase';

export const firebaseLogAddEmployee = employee => {
  employeesLogsRef.add({
    action: 'ADD_EMPLOYEE',
    data: employee,
    creation_date: timestamp.now()
  });
};

export const firebaseLogDeleteEmployee = id => {
  employeesLogsRef.add({
    action: 'DELETE_EMPLOYEE',
    employeeId: id,
    creation_date: timestamp.now()
  });
};

export const firebaseLogGetEmployees = employees => {
  employeesLogsRef.add({
    action: 'GET_EMPLOYEES',
    data: employees,
    creation_date: timestamp.now()
  });
};

export const firebaseLogUpdateEmployee = employee => {
  employeesLogsRef.add({
    action: 'UPDATE_EMPLOYEE',
    data: employee,
    creation_date: timestamp.now()
  });
};
