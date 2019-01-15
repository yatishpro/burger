import React from "react";
import Classes from "./Burger.module.scss";
import BurgerIngrediant from "./BurgerIngrediant/BurgerIngrediant";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => (
        <BurgerIngrediant key={ingKey + i} type={ingKey} />
      ));
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients</p>;
  }

  return (
    <div className={Classes.Burger}>
      <BurgerIngrediant type="bread-top" />
      {transformedIngredients}
      <BurgerIngrediant type="bread-bottom" />
    </div>
  );
};

export default burger;
