import React, { useEffect, useState } from "react";
import "./styles.css";
const initState = { fname: "", lname: "", company: "" };
const Form = (props) => {

  const [localState, setLocalState] = useState({ form: { ...initState }, label: "Save" });


  useEffect(() => {
    setLocalState({
      form: { ...props.data[props.id] },
      label: "Update",
    })
    if (props.id === -2) {
      handleClear();
    }
  }, [props.id])
  /*  componentDidUpdate(prevProp) {
     if (props.id !== -1 && prevProp.id !== props.id) {
       setData({
         form: { ...props.data[props.id] },
         label: "Update",
       })
       if (props.id === -2) {
         handleClear();
       }
     }
   } */

  const handleChange = (key, value) => {
    setLocalState({
      ...localState,
      form: { ...localState.form, [key]: value }
    })
  }

  const handleSubmit = () => {
    const { form } = localState;
    const { id, data, onChange } = props;
    const newData = id === -1 ? data.concat(form) : data.map((ele, i) => i === id ? form : ele);
    onChange(newData, "data");
    handleClear();
  }

  const handleClear = async () => {
    const { id, onChange } = props;
    setLocalState({
      form: { ...initState },
      label: "Save",
    })
    await id !== -1 && onChange(-1, "id");
  }


  const { form, label } = localState;
  const { fname, lname, company } = form;

  let isInputEditable = props.id !== -1;
  return (
    <div className="form-group">
      <div>
        <input className="form-control" type="text" name="fname" id="txtName" placeholder="Enter your First Name"
          onChange={(e) => handleChange(e.target.name, e.target.value)} value={fname} />
      </div>

      <div>
        <input className="form-control" type="text" name="lname" id="txtLname" placeholder="Enter your Last Name"
          onChange={(e) => handleChange(e.target.name, e.target.value)} value={lname} />
      </div>

      <div>
        <input className="form-control" type="text" name="company" id="txtCompany" placeholder="Enter your Company Name"
          onChange={(e) => handleChange(e.target.name, e.target.value)} value={company} />
      </div>

      <div className="button-group">
        <button className="btn btn-success" type="submit" name="save" id="btnSave"
          onClick={() => handleSubmit()}>{label}</button>
        {
          isInputEditable ? <button type="submit" className="btn btn-primary" name="reset" id="btnReset"
            onClick={() => handleClear()}>Clear</button> : ""
        }
      </div>
    </div>
  )
}

export default Form;