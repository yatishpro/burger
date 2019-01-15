import React from "react";
import Classes from "./BuildControl.module.scss";

const buildControl = props => {
  return (
    <div className={Classes.BuildControl}>
      <div className={Classes.Label}>{props.lable}</div>
      <button
        disabled={props.disabled}
        onClick={props.removed}
        className={Classes.Less}
      >
        Less
      </button>
      <button onClick={props.added} className={Classes.More}>
        More
      </button>
    </div>
  );
};

export default buildControl;
