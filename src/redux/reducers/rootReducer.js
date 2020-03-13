import { combineReducers } from '@reduxjs/toolkit';
import employeeSlicesReducer from '../slices/employeeSlices';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  employees: employeeSlicesReducer,
  firebase: firebaseReducer
});

export default rootReducer;
