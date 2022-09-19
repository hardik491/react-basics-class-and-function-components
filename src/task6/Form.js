import React, { Component } from "react";

class Form extends Component {
  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate() {
    console.log('Component Updated');
  }
  
  render() {
    const { name, lname } = this.props.form;
    return (
      <>

        <br />
        <br />

        <label
          style={{ fontSize: "50pt", fontWeight: 600 }}>
          {name} {lname}
        </label>

        <br />
        <br />

        <input
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          name="name"
          type="text"
          id="txtDisplay"
          value={name}
          onChange={(e) => { this.props.handleChange(e.target.value, e.target.name) }} />

        <br />

        <input
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          name="lname"
          id="txtDisplay1"
          value={lname}
          onChange={(e) => { this.props.handleChange(e.target.value, e.target.name) }} />

        <br />

      </>
    )
  }
}

export default Form;