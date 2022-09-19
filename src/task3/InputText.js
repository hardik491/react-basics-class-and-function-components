import React, { Component } from "react";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'hardik' };
  }

  handleChange = (name) => {
    this.setState(({
      input: name,
    }))
  }

  handleClick = () => {
    this.setState(({
      name: this.state.input,
    }))
  }

  render() {
    return (
      <div className='container'>
        <h3>Display</h3>
        <label
          style={{ fontSize: "50pt", fontWeight: 600 }}>
          {this.state.name}
        </label>

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
          id="btnClick"
          onClick={this.handleClick}>
          Click
        </button>
      </div>
    )
  }
}

export default InputText;