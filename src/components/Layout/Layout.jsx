import React from "react";
import Aux from "../../hoc/Auxs";
import Classes from "./Layout.module.scss";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={[Classes.container, Classes.content].join(" ")}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
