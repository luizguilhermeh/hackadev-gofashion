import React from "react";
import Icons from "./Icons";
import Logo from "./Logo";
import "./Headers.css";

class Headers extends React.Component {
  render() {
    return <div className="headers">
      <Logo/>
      <Icons/>      
    </div>;
  }
}

export default Headers;
