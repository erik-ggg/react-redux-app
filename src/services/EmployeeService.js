import axios from 'axios';

const EMPLOYEES_URL = 'http://localhost:8080/employees';

/**
 * Retrieves the employees from the database.
 * @returns An Axios Promise.
 */
export const getEmployeesService = () => {
  return axios
    .get(EMPLOYEES_URL)
    .catch(err => {
      console.log('GET_EMPLOYEES_ERROR', err);
    })
    .then(res => res.data);
};

/**
 * Retrieves the employee that match with the id.
 *
 * @param id The employee id.
 * @returns the employee if exists
 */
export const getEmployeeService = id => {
  return axios
    .get(`${EMPLOYEES_URL}/${id}`)
    .catch(err => {
      console.err('GET_EMPLOYEE_ERROR', err);
    })
    .then(res => res.data);
};

export const deleteEmployeeService = id => {
  return axios.delete(`${EMPLOYEES_URL}/${id}`).catch(err => {
    console.log('DELETE_EMPLOYEE_ERROR', err);
  });
};

export const postEmployeeService = employee => {
  return axios
    .post(EMPLOYEES_URL, employee)
    .catch(err => {
      console.log('POST_EMPLOYEE_ERROR', err);
    })
    .then(res => res.data);
};

/**
 * Inserts the given employee in the database using his id to fetch him.
 *
 * @param {*} id The id of the employee
 * @param {*} employee The employee object with all the data
 */
export const putEmployeeService = (id, employee) => {
  console.log('PUT_EMPLOYEE_PARAM', id, employee);
  return axios
    .put(`${EMPLOYEES_URL}/${id}`, employee)
    .then(res => {
      console.log('PUT_EMPLOYEE_RES', res);
    })
    .catch(err => {
      console.log('PUT_EMPLOYEE_ERR', err);
    });
};

export default getEmployeesService;
