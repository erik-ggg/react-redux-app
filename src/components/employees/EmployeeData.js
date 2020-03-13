import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Material-ui
import { List, ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
// Redux
import { useSelector } from 'react-redux';
// Service
import { getEmployeeService } from '../../services/EmployeeService';

const EmployeeData = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  // Gets the employee from the state
  const reduxEmployee = useSelector(state =>
    state.employees.employees.filter(e => e.id == id)
  )[0];

  useEffect(() => {
    async function getEmployee(id) {
      const res = await getEmployeeService(id);
      setEmployee(res);
    }
    // If the redux store is empty, fetch the employee directly
    reduxEmployee === undefined ? getEmployee(id) : setEmployee(reduxEmployee);
  }, [id, reduxEmployee]);

  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={'First Name: '} secondary={employee.firstName} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={'Last Name: '} secondary={employee.lastName} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary={'Email: '} secondary={employee.emailId} />
      </ListItem>
    </List>
  );
};

export default EmployeeData;
