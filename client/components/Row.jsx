import React from "react";
import Square from "./Square.jsx";
import { useSelector } from "react-redux";

export default function Row({ length, rowId }) {
  console.log({ rowId });
  const currentWord = useSelector((state) => state.game.currentWord);
  const currentRow = useSelector((state) => state.game.currentRow);
  const previousWords = useSelector((state) => state.game.previousWords);
  console.log({currentWord, currentRow, previousWords})
  const row = [];

  for (let i = 0; i < length; i++) {
    row.push(
      <Square
        value={
          rowId === currentRow
            ? currentWord[i]
            : (previousWords[(5 * rowId) + i] || "")
        }
      />
    );
  }
  return <div className="row-container">{row}</div>;
}
