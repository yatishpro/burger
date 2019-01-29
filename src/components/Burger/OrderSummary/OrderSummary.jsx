import React from "react";
import Aux from "../../../hoc/Auxs/Auxs";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingridentSummery = Object.keys(props.ingridents).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingridents[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingridentSummery}</ul>
      <p>Continue to checkout</p>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.purchasableCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
