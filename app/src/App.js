import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Employees from "./components/Employee";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(40);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/employeesExample");
      setEmployees(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current employees
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">
        Javascript Fullstack - Code Challenge{" "}
        <img src={logo} className="App-logo" alt="logo" />
      </h1>
      <Employees employees={currentEmployees} loading={loading} />
      <Pagination
        employeesPerPage={employeesPerPage}
        totalEmployees={employees.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
