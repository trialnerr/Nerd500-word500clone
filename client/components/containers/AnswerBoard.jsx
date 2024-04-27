import React from 'react';
// import Row from "../Row.jsx";
import { useSelector } from 'react-redux';

const colors = ['green', 'yellow', 'red'];

function ColorAnswer({ id }) {
  const greenYellowRedCount = useSelector((state) => state.game.greenYellowRedCount);
  for (let i = 0; i < colors.length; i++) {
    return (
      <div className={`square ${colors[id % 3]}`}>{greenYellowRedCount[id] || ''}</div>
    );
  }
}

function AnswerRow({ ansRowId }) {
  const colorAnswerRows = [];
  for (let i = 0; i < 3; i++) {
    colorAnswerRows.push(<ColorAnswer id={ansRowId * 3 + i} key = {`answerRow${i}`}/>);
  }
  return <div className='answer_row'>{colorAnswerRows}</div>;
}

export default function AnswerBoard() {
  
  const answerRows = [];
  for (let i = 0; i < 8; i++) {
    answerRows.push(
      <AnswerRow ansRowId={i} key={`answer_row${i}`} id={`answer_row${i}`} />
    );
  }
  return <div className='answerRows'>{answerRows}</div>;
}
