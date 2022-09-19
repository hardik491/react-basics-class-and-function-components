import React, { Component } from "react";
import DisplayText from "../task2/DisplayText";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'hardik' };
  }

  handleChange = (name) => {
    this.setState(({
      name: name,
    }))
  }

  render() {
    return (
      <div className='container'>
        <h3>Display</h3>
        <DisplayText name={this.state.name} />

        <br />

        <input
          style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
          type="text"
          id="txtDisplay"
          onChange={(e) => { this.handleChange(e.target.value) }} />

        <br />
        <br />

        <button
          style={{ height: "30px", width: "210px" }}
          type="button"
          id="btnClick">
          Click
        </button>
      </div>
    )
  }
}

export default InputText;