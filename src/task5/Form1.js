
import React, { Component } from "react";
import Form2 from "./Form2";

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form1Name: "",
      form1Lname: "",
      form2Name: "",
      form2Lname: "",
      tempform1Name: "",
      tempform1Lname: "",
      tempform2Name: "",
      tempform2Lname: "",
    };
  }

  handleChange = (value, key) => {
    let objKey = `temp${[key]}`
    this.setState({
      [objKey]: value,
    })
  }

  handleClick = () => {
    const { tempform1Name, tempform1Lname, tempform2Name, tempform2Lname } = this.state;
    this.setState({
      form1Name: tempform1Name,
      form1Lname: tempform1Lname,
      form2Name: tempform2Name,
      form2Lname: tempform2Lname,
      tempform1Name: "",
      tempform1Lname: "",
      tempform2Name: "",
      tempform2Lname: "",
    })
  }

  render() {
    return (
      <div className='container'>
        <label
          style={{ fontSize: "50pt", fontWeight: 600 }}>
          {this.state ? this.state.form1Name : ""} {this.state ? this.state.form1Lname : ""}
        </label>

        <br />
        <br />

        <input
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          name="form1Name"
          type="text"
          id="txtDisplay"
          onChange={(e) => { this.handleChange(e.target.value, e.target.name) }} />

        <br />

        <input
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          name="form1Lname"
          id="txtDisplay1"
          onChange={(e) => { this.handleChange(e.target.value, e.target.name) }} />

        <br />

        <Form2 handleChange={this.handleChange} {...this.state} />

        <br />
        <br />
        <br />

        <button
          style={{ height: "30px", width: "210px" }}
          type="button"
          id="btnClick"
          onClick={this.handleClick}>
          Click
        </button>
      </div>
    )
  }
}

export default Form1;