import { createAction } from '@reduxjs/toolkit';
let nextAppId = 0;

export const addEmployee = createAction('ADD_EMPLOYEE');

// export const addEmployee = employee => ({
//   type: 'ADD_EMPLOYEE',
//   id: nextAppId++,
//   employee
// });

// export const deleteEmployee = text({
//   type: "DELETE_EMPLOYEE",
//   text
// });

// export const updateEmployee = text({
//   type: "UPDATE_EMPLOYEE",
//   text
// });
