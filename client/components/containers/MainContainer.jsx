import React from "react";
import NavBar from "../NavBar.jsx";
import GuessBoard from "./GuessBoard.jsx";
import AnswerBoard from "./AnswerBoard.jsx";
import ResetBoard from "./ResetBoard.jsx";

export default function MainContainer() {
  console.log("I am here");
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="boardContainer">
        <div className="guessContainer">
          <ResetBoard />
          <GuessBoard />
        </div>
        <AnswerBoard />
      </div>
    </div>
  );
}
