import React from "react";
import Aux from "../../hoc/Auxs";
import Classes from "./Layout.module.scss";

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={Classes.container}>{props.children}</main>
  </Aux>
);

export default layout;
