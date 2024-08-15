import React from 'react';
import Row from './Row.jsx';

export default function HowToPlay() {
  return (
    <div className='container'>
      <h1>How To Play</h1>
      <hr />
      <h2>Objective</h2>
      <p>Guess a secret word in 8 attempts or less!</p>
      <ul>
        <li>Start by entering any valid 5-letter word.</li>
        <li>
          After each guess, the three colored (green-yellow-red) tiles on the
          right will show how many letters of your guess are in the secret word
          and how many are in the right position.
        </li>
        <li>
          Use the feedback to refine your guesses and zero in on the secret
          word.
        </li>
        <li>Continue guessing until you correctly identify the secret word.</li>
      </ul>
      <p>
        The game is a bit like Wordle, except Wordle tells you exactly which
        letters are green, yellow or red. Word500 tells you how many of each
        there are!
      </p>
      <h2>Feedback Example</h2>
      <p>
        Suppose the secret word is <strong>PLANT</strong> and you guess{' '}
        <strong>PARTY</strong>. You might receive feedback like this:
      </p>
      <hr />
      <div className="example">
        <Row length={5} rowId={9}></Row>
      </div>
    </div>
  );

}