import React, { useState } from "react";

const LabelChange = () => {
  const [text, setText] = useState("");
  const setKeyword = e => setText(e.target.value);

  return (
    <div className='container'>
      <label>{text}</label>
      <input type="text" id="txtDisplay" onKeyUp={setKeyword} />
      <button type="button" id="btnClick">Click</button>
    </div>
  )
}

export default LabelChange;