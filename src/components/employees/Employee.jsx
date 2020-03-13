import React from "react";

class Employee extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.lastName}</td>
        <td>{this.props.employee.emailId}</td>
      </tr>
    );
  }
}
export default Employee;
