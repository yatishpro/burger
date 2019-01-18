import React from "react";
import Classes from "./Toolbar.module.scss";
import Logo from "../../Logo/Logo";
import Navigation from "../NavigationItems/NavigationItems";
import Menu from "../../Menu/Menu";

const toolbar = props => (
  <header className={Classes.Toolbar}>
    <Menu clicked={props.open} />
    <div className={Classes.Logo}>
      <Logo />
    </div>
    <nav className={Classes.DesktopOnly}>
      <Navigation />
    </nav>
  </header>
);

export default toolbar;
