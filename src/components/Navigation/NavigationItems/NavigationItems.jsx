import React from "react";
import Classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className={Classes.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default navigationItems;
