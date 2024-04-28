import WORDS from '../constants/words.js';

export function checkValid(word) {
  if (!WORDS.includes(word.toLowerCase())) {
    alert('word is not in wordList');
    return false;
  }
  return true;
}

export function pickCurrentWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
//this function will remove the indices from the guess
function removeIndices(indices, guess) {
  return guess
    .split('')
    .filter((_, index) => !indices.includes(index))
    .join('');
}


//this function will compare the guess with the current word
//it will return a string of the form 'greenCountyellowCountredCount'
export function compareWithCurrentWord(guess, word) {
  guess = guess.toLowerCase(); 
  let greenCount = 0;
  const matchingIndices = [];
  let yellowCount = 0;
  let redCount = 0;

  if (guess.length < 5) {
    console.log(
      'Something went horribly wrong. Guess letter has less than 5 letters.'
    );
  }

  for (let i = 0; i < 5; i++) {
    if (guess[i] === word[i]) {
      matchingIndices.push(i);
      greenCount++;
    }
  }
  let guessNoGreen = removeIndices(matchingIndices, guess);
  let wordNoGreen = removeIndices(matchingIndices, word);


  for (let char of guessNoGreen) {
   
    if (wordNoGreen.includes(char)) {
      wordNoGreen = wordNoGreen.replace(char, '');
      yellowCount++;
    }
  }

  redCount = 5 - (greenCount + yellowCount);
  return [greenCount, yellowCount, redCount].join('');
}



// export function updateDailyWord() {
//   const today = new Date().toISOString().slice(0, 10);

//   let storedDate = localStorage.getItem('wordDate');
//   if (storedDate === today) {
//     return;
//   }
//   const newWord = pickCurrentWord();

//   // Store the new word and today's date
//   localStorage.setItem('dailyWord', newWord);
//   localStorage.setItem('wordDate', today);
// }

// export function getCurrentWord() {
//   let storedDate = localStorage.getItem('wordDate');
//   const today = new Date().toISOString().slice(0, 10);
//   if (storedDate !== today) {
//     updateDailyWord();
//   }

//   return localStorage.getItem('dailyWord');
// }

export const wordChoice = pickCurrentWord();


