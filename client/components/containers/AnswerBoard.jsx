import React from "react";
import Row from "../Row.jsx";

export default function GuessBoard() {
  const guessRows = [];
  for (let i = 0; i < 8; i++) {
    guessRows.push(<Row length={3} />);
  }

  return <div className="gameRows">{guessRows}</div>;
}
