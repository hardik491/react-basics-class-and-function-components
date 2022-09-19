import React, { Component } from "react";
import { connect } from 'react-redux';
import "./styles.css";

const initState = { fname: "", lname: "", company: "" };

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { form: { ...initState }, label: "Save" }
  }

  componentDidUpdate(prevProp) {
    if (this.props.id !== -1 && prevProp.id !== this.props.id) {
      this.setState({
        form: { ...this.props.data[this.props.id] },
        label: "Update",
      })
      if (this.props.id === -2) {
        this.handleClear();
      }
    }
  }

  handleChange = (key, value) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value }
    })
  }

  handleSubmit = () => {
    const { form } = this.state;
    const { id, data, onChange } = this.props;
    const newData = id === -1 ? data.concat(form) : data.map((ele, i) => i === id ? form : ele);
    onChange(newData, "data");
    this.handleClear();
  }

  handleClear = async () => {
    const { id, onChange } = this.props;
    this.setState({
      form: { ...initState },
      label: "Save",
    })
    await id !== -1 && onChange(-1, "id");
  }

  render() {
    const { form, label } = this.state;
    const { fname, lname, company } = form;

    let isInputEditable = this.props.id !== -1;
    return (
      <div className="form-group">
        <div>
          <input className="form-control" type="text" name="fname" id="txtName" placeholder="Enter your First Name"
            onChange={(e) => this.handleChange(e.target.name, e.target.value)} value={fname} />
        </div>

        <div>
          <input className="form-control" type="text" name="lname" id="txtLname" placeholder="Enter your Last Name"
            onChange={(e) => this.handleChange(e.target.name, e.target.value)} value={lname} />
        </div>

        <div>
          <input className="form-control" type="text" name="company" id="txtCompany" placeholder="Enter your Company Name"
            onChange={(e) => this.handleChange(e.target.name, e.target.value)} value={company} />
        </div>

        <div className="button-group">
          <button className="btn btn-success" type="submit" name="save" id="btnSave"
            onClick={() => this.handleSubmit()}>{label}</button>
          {
            isInputEditable ? <button type="submit" className="btn btn-primary" name="reset" id="btnReset"
              onClick={() => this.handleClear()}>Clear</button> : ""
          }

        </div>
      </div>
    )
  }
}

export default connect(state => state)(Form);