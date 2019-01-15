import React from "react";
import Classes from "./BuildControls.module.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => {
  return (
    <div className={Classes.BuildControls}>
      <h3 className={Classes.Price}>
        Price: <strong>{props.price.toFixed(2)}</strong>
      </h3>
      {controls.map(ctrl => (
        <BuildControl
          added={() => props.ingridentAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          key={ctrl.label}
          lable={ctrl.label}
          disabled={props.disabledCheck[ctrl.type]}
        />
      ))}
    </div>
  );
};

export default buildControls;
