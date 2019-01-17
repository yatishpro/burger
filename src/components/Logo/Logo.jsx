import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import Classes from "./Logo.module.scss";

const logo = props => {
  return (
    <div className={Classes.Logo}>
      <img src={burgerLogo} alt="Logo" />
    </div>
  );
};

export default logo;
