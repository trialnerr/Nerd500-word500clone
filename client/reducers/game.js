import WORDS from "../constants/words.js";

export function checkValid(word){
   if (!WORDS.includes(word.toLowerCase())) return false; 
   return true;
}

