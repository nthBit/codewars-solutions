function isPangram(string){
  const indexSum = 325;
  const alphabetSum = 26;
  const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  
  let cleanArray = [];
  Array.from(string.toLowerCase()).forEach(letter => {
    if (alphabet.includes(letter)) {
      cleanArray.push(letter);
    }
  });
  const noDupesArray = [...new Set(cleanArray)];
  
  let indexCount = 0;
  let alphabetCount = 0;
  for (const [index, letter] of noDupesArray.entries()) {
    indexCount += index;
    alphabetCount += 1;
  }
  
  if ((indexCount === indexSum) && (alphabetCount === alphabetSum)) {
    return true;
  } else {
    return false;
  }
}