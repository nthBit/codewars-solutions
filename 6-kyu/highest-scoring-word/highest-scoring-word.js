function high(x){
  const xArray = x.split(" ");
  let wordUTF16 = 0;
  let greatestUTF16 = "";
  
  xArray.forEach(word => {
    let charUTF16 = 0;
​
    for (let i = 0; i < word.length; i++) {
      charUTF16 += word.charCodeAt(i) - 96;
    }
    
    if (charUTF16 > wordUTF16) {
      wordUTF16 = charUTF16;
      greatestUTF16 = word;
    }
  });
  
  return greatestUTF16;  
}