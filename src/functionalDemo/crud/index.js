import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const Operations = () => {

  const [feautue, setFeauture] = useState({
    data: [],
    id: -1,
  });

  const handleChange = (value, name) => {
    setFeauture({ ...feautue, [name]: value })
  }

  const { data, id } = feautue;
    return (
      <div>
        <Form
          {...{ data, id }}
          onChange={handleChange} />
        <Table {...{ data, id }}
          onChange={handleChange} />
      </div>
    )
}

export default Operations;