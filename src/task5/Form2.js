import React, { Component } from "react";

class Form2 extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <br />
        <br />
        <br />

        <label
          style={{ fontSize: "50pt", fontWeight: 600 }}>
          {this.props.form2Name} {this.props.form2Lname}
        </label>

        <br />
        <br />

        <input
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          name="form2Name"
          type="text"
          id="txtDisplay3"
          onChange={(e) => { this.props.handleChange(e.target.value, e.target.name) }} />

        <br />

        <input
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          name="form2Lname"
          type="text"
          id="txtDisplay4"
          onChange={(e) => { this.props.handleChange(e.target.value, e.target.name) }} />

        <br />
        <br />

      </div>
    )
  }
}

export default Form2;