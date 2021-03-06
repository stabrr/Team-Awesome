import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={(event) => {
      props.timerStart(event)
      props.handleClick(props.id, props.position)
      }}
    style={{ backgroundImage: `url("${props.flipped ? props.image:props.faceDown}")` }}
    className={`click-item col-md-2 pull-left`}
  />
);

export default ClickItem;
