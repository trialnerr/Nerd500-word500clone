import React from 'react';
import Example from './Example.jsx';

export default function HowToPlay() {

  return (
    <div className='how-to-container'>
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
        SECRET WORD: <strong>PLANT</strong>
      </p>
      <p>
        YOUR GUESS: <strong>PARTY</strong>
      </p>

      <div className='example'>
        <p>FEEDBACK:</p>
        <Example colorValueObj={{ green: 1, yellow: 2, red: 2 }}></Example>
      </div>
      <h2>Explanation</h2>
      <p>
        1 letter, P, is both in the secret word and also in the correct position
        (green)
      </p>
      <p>
        2 letters, A and T, in the secret word but in the wrong positions
        (yellow)
      </p>
      <p>2 letters, R and Y, are not in the secret word (red)</p>
    </div>
  );

}