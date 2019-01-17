import React from "react";
import Classes from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";
import Navigation from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={Classes.Toolbar}>
    <div>MENU</div>
    <div>
      <Logo />
    </div>
    <nav>
      <Navigation />
    </nav>
  </header>
);

export default toolbar;
