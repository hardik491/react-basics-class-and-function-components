import React, { Component } from "react";
import Form from "./Form";
class AllForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form1: { name: "", lname: "" },
      form2: { name: "", lname: "" },
    };
  }

  handleChange = (value, key, name) => {
    this.setState({
      [name]: {
        ...this.state[name],
        [key]: value,
      }
    })
  }

  render() {
    const { form1, form2 } = this.state;
    return (
      <div className='container'>
        <Form
          handleChange={(value, key) => this.handleChange(value, key, "form1")}
          form={form1} />

        <Form
          handleChange={(value, key) => this.handleChange(value, key, "form2")}
          form={form2} />
      </div>
    )
  }
}

export default AllForm;