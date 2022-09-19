import React, { useState } from "react";
import { Display } from "./Display";

const InputText = () => {
  const [data, setData] = useState({ name: "" });

  const handleChange = (value) => setData({
    ...data,
    "name": value,
  });

  return (
    <div className='container'>
      <h3>Display</h3>
      <Display name={data.name} />

      <br />

      <input
        style={{ padding: "20px", borderRadius: "10px", outline: "none" }}
        type="text"
        id="txtDisplay"
        onChange={(e) => { handleChange(e.target.value) }} />

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

export default InputText;