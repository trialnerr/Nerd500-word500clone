import React from 'react';
// import Row from "../Row.jsx";
import { useSelector } from 'react-redux';


function Green({id}) {
  
  const RGB = useSelector((state) => state.game.RGB);
  return <div className="square green">{RGB[id] || ''}</div>;
}

function Yellow({id}){
  
  const RGB = useSelector((state) => state.game.RGB);
  return <div className="square yellow">{RGB[id] || ''}</div>;
}

function Red({id}) {
  const RGB = useSelector((state) => state.game.RGB);
 
  return <div className="square red">{RGB[id] || ''}</div>;
}

function AnswerRow({ansRowId}) {
  return (
    <div className="answer-container">
      <Green id={ansRowId*3 + 0} />
      <Yellow id={ansRowId*3 + 1} />
      <Red id={ansRowId*3 + 2} />
    </div>
  );
}

export default function AnswerBoard() {
  console.log('I am an answerRow', <AnswerRow />);
  const answerRows = [];
  for (let i = 0; i < 8; i++) {
    answerRows.push(<AnswerRow ansRowId={i} />);
  }

  return <div className="answerRows">{answerRows}</div>;
}
