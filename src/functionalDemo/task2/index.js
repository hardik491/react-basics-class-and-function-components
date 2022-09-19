import React, { useState } from "react";

const InputText = () => {
  const [data1, setData] = useState({ temp: { name: 'hardik' }, data: { name: 'hardik' } });

  const handleChange = (name) => setData({
    ...data1,
    temp: {
      ...data1.temp,
      name: name,
    },
  });

  const handleClick = () => setData({
    ...data1,
    data: {
      ...data1.temp,
    }
  });

  return (
    <div className='container'>
      <h3>Display</h3>
      <label
        style={{ fontSize: "50pt", fontWeight: 600 }}>
        {data1.data.name}
      </label>

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
        id="btnClick"
        onClick={handleClick}>
        Click
      </button>
    </div>
  )
}

export default InputText;