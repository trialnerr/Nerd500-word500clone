import React from "react";
import { useDispatch, useEffect } from "react-redux";
import * as actions from "../actions/actions";
import * as gameFunc from "../reducers/game";
import { useSelector } from "react-redux";

const row1 = ["_", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const row2 = ["HINT", "A", "S", "D", "F", "G", "H", "J", "K", "L"];
const row3 = ["DEL", "Z", "X", "C", "V", "B", "N", "M", "ENTER"];

function KeyBoardButton({ alphabet }) {
  const dispatch = useDispatch();
  //const currentState = useSelector((state) => state);
  const guess = useSelector((state) => state.game.currentWord);
  const wordChoice = useSelector((state) => state.game.currentWordChoice);

  // console.log("I am the current state", currentState);
  console.log("I am alphabet", alphabet);

  function letterUpdateHandler() {
    if (alphabet === "ENTER") {
      const bool = gameFunc.checkValid(guess);
      const RGB = gameFunc.compareWithCurrentWord(guess, wordChoice);
      console.log({ bool , RGB});
      return dispatch(actions.updateWordActionCreator(bool, RGB));
    }
    if (alphabet === 'DEL'){
      return dispatch(actions.deleteWordActionCreator());
    }
    // if (alphabet === 'HINT'){
    //   return dispatch()
    // }
    // if (alphabet === '_'){
    //   return dispatch()
    // }
    return dispatch(actions.addLetterActionCreator(alphabet));
  }

  return (
    <button onClick={letterUpdateHandler} className="keyboard-button">
      {alphabet}
    </button>
  );
}

const keyboard1 = [];
for (const option of row1) {
  keyboard1.push(<KeyBoardButton alphabet={option} />);
}

const keyboard2 = [];
for (const option of row2) {
  keyboard2.push(<KeyBoardButton key={option} alphabet={option} />);
}

const keyboard3 = [];
for (const option of row3) {
  keyboard3.push(<KeyBoardButton key={option} alphabet={option} />);
}
export default function Keyboard() {
  return (
    <div id="keyboard-wrapper">
      <div id="keyboard-container">
        <div id="row1">{keyboard1}</div>
        <div id="row2">{keyboard2}</div>
        <div id="row3">{keyboard3}</div>
      </div>
    </div>
  );
}
