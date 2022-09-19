import React, { Component } from "react";
import { connect } from 'react-redux';
import { manage_user_details } from '../actions/user.action'
import Form from "./Form";
import Table from "./Table";


class Operations extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (value, name) => {
    const { data, id, dispatch } = this.props;
    const obj = { ...data, ...id, data, id, };
    obj[name] = value;
    dispatch(manage_user_details({ ...obj }));
  }

  render() {
    const { data, id } = this.props;
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

export default connect(state => state)(Operations);