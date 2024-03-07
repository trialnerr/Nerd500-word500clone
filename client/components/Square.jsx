import React from "react";
import { useSelector } from "react-redux";

export default function Square({ value }) {
  const colorObj = {
    red: "#f17f7f",
    green: "#9cec9c",
    white: "#d4cfcf",
    yellow: "#ffd900",
  };

  const currentColor = useSelector((state) => state.game.currentColor);
  
  function handleClick(event) {
    console.log("I am in colors- currentColor", colorObj[currentColor]);
    console.log({ currentColor });
    console.log("I am event", event.target);
    event.target.style.backgroundColor = colorObj[currentColor];
  }
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}
