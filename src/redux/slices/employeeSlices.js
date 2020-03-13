import { createSlice } from '@reduxjs/toolkit';
import {
  deleteEmployeeService,
  getEmployeesService,
  postEmployeeService,
  putEmployeeService
} from '../../services/EmployeeService';
import {
  firebaseLogAddEmployee,
  firebaseLogDeleteEmployee,
  firebaseLogGetEmployees,
  firebaseLogUpdateEmployee
} from '../../components/employees/firebase/firebaseLogService';

let initialState = {
  employees: []
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    add: (state, action) => {
      // console.log('REDUX_ADD', action.payload);
      state.employees.push(action.payload);
      firebaseLogAddEmployee(action.payload);
    },
    remove: (state, action) => {
      // console.log('REDUX_DELETE', action.payload);
      state.employees = state.employees.filter(e => e.id !== action.payload);
      firebaseLogDeleteEmployee(action.payload);
    },
    load: (state, action) => {
      // console.log('REDUX_LOAD', action.payload);
      state.employees = action.payload;
      firebaseLogGetEmployees(action.payload);
    },
    update: (state, action) => {
      // console.log('REDUX_UPDATE', action.payload);
      state.employees = state.employees.map(em => {
        return em.id === action.payload.id ? action.payload : em;
      });
      firebaseLogUpdateEmployee(action.payload);
    }
  }
});

export const fetchEmployees = () => async dispatch => {
  try {
    const employees = await getEmployeesService();
    dispatch(load(employees));
  } catch (err) {
    console.log('REDUX_LOAD_ERROR', err);
  }
};

export const addEmployee = employee => async dispatch => {
  try {
    const res = await postEmployeeService(employee);
    dispatch(add(res));
  } catch (err) {
    console.log('REDUX_ADD_ERROR', err);
  }
};

export const deleteEmployee = id => async dispatch => {
  try {
    await deleteEmployeeService(id);
    dispatch(remove(id));
  } catch (err) {
    console.log('REDUX_DELETE_ERROR', err);
  }
};

export const updateEmployee = (id, employee) => async dispatch => {
  try {
    await putEmployeeService(id, employee);
    dispatch(update(employee));
  } catch (err) {
    console.log('REDUX_UPDATE_ERROR', err);
  }
};

export const { add, remove, load, update } = employeeSlice.actions;

export default employeeSlice.reducer;
