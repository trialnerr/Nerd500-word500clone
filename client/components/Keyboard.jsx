import React from "react";
function KeyBoardButton({ alphabet }) {
  return <button class="keyboard-button">{alphabet}</button>;
}

const qwertyLetters = [
  "_",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "DEL",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "ENTER"
];
const keyboard = [];
for (const option of qwertyLetters){
  keyboard.push(<KeyBoardButton alphabet = {option} />)
}

export default function Keyboard() {
  return (
    <div id="keyboard-container">
      {keyboard}
      </div>
  );
}
