import React, { Component } from "react";

class DisplayText extends Component {
  render() {
    return (
      <>
        <label style={{fontSize:"50pt",fontWeight:600}}>{this.props.name}</label>
      </>
    )
  }
}

export default DisplayText;
