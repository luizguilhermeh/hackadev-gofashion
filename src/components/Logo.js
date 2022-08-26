import React from "react";
import logoheaders from "../img/logo.png";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <a href="/home">
        <img src={logoheaders} alt="logo" />
        </a>
      </div>
    );
  }
}

export default Logo;
