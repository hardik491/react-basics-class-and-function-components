import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'hardik', lastName: 'thakar' };
  }

  handleChange = (value, key) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    return (
      <div className='container'>
        <h3>Display</h3>
        <label style={{ fontSize: "50pt", fontWeight: 600 }}>
          {this.state.name + " " + this.state.lastName}
        </label>
        
        <br />

        <input
          name="name"
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          type="text"
          id="txtDisplay"
          onChange={(e) => { this.handleChange(e.target.value, e.target.name) }} />

        <br />
        <br />

        <input
          name="lastName"
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          type="text"
          id="txtDisplay1"
          onChange={(e) => { this.handleChange(e.target.value, e.target.name) }} />

      </div>
    )
  }
}

export default Person;