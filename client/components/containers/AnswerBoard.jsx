import React from "react";
// import Row from "../Row.jsx";

function Red() {
  return <div className="square red"></div>;
}

function Yellow() {
  return <div className="square yellow"></div>;
}

function Green() {
  return <div className="square green"></div>;
}

function AnswerRow() {
  return (
    <div className="answer-container">
      <Red />
      <Yellow />
      <Green />
    </div>
  );
}

export default function AnswerBoard() {
  console.log('I am in answerboard')
  const answerRows = [];
  for (let i = 0; i < 8; i++) {
    answerRows.push(<AnswerRow />);
  }

  return <div className="answerRows">{answerRows}</div>;
}
