import React, { Component } from "react";
import "./styles.css";

class Employee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-align-center">Employee</h1>
        <table className="table">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>Experience</th>
          </tr>
          <tr>
            <td>Hardik</td>
            <td>Thakar</td>
            <td>Software Engineer</td>
            <td>1 Year</td>
          </tr>
          <tr>
            <td>Vishal</td>
            <td>Mehta</td>
            <td>QA</td>
            <td>2 Year</td>
          </tr>
          <tr>
            <td>Ami</td>
            <td>Vyas</td>
            <td>Software Engineer</td>
            <td>1 Year</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Employee;