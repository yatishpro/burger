import React, { Component } from "react";
import Aux from "../../hoc/Auxs/Auxs";
import Classes from "./Layout.module.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerOpenHandler = () => {
    this.setState({
      showSideDrawer: true
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar open={this.sideDrawerOpenHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          sideHandler={this.props.sideBarHandler}
        />
        <main className={[Classes.container, Classes.content].join(" ")}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
