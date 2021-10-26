import React from "react";

const Employees = ({ employees, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="table ">
      <thead>
        <tr>
          <td>emp_no</td>
          <td>birth_date</td>
          <td>first_name</td>
          <td>last_name</td>
          <td>gender</td>
          <td>hire_date</td>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.emp_no}>
            <td>{employee.emp_no}</td>
            <td>{employee.birth_date}</td>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.gender}</td>
            <td>{employee.hire_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Employees;
