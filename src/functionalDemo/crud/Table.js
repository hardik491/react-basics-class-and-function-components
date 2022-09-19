import React from "react";
import "./styles.css";

const Table = (props) => {
  const handleRemove = async (id) => {
    const { data, onChange, } = props;
    await onChange(-2, "id");
    const newData = data.filter((_, i) => i !== id)
    await onChange(newData, "data");
  }

  const { data, onChange, } = props;
  return (
    <div className="form-group">
      <table className="table">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company Name</th>
          <th>Operation</th>
        </tr>

        {data.map((ele, index) =>
          <tr key={index}>
            <td>{ele.fname}</td>
            <td>{ele.lname}</td>
            <td>{ele.company}</td>
            <td className="align-center">
              <a
                className="btn btn-danger"
                onClick={() => handleRemove(index)}>
                Delete
              </a>
              <a
                className="btn btn-primary"
                onClick={() => onChange(index, "id")}>
                Edit
              </a>
            </td>
          </tr>
        )
        }
      </table>
    </div>
  )
}

export default Table;