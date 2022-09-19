import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";

class Operations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: -1,
    };
  }

  handleChange = (value, name) => {
    this.setState({ ...this.state, [name]: value })
  }

  render() {
    const { data, id } = this.state;
    return (
      <div>
        <Form
          {...{ data, id }}
          onChange={this.handleChange} />
        <Table {...{ data, id }}
          onChange={this.handleChange} />
      </div>
    )
  }
}

export default Operations;