function rowSumOddNumbers(n) {
  const rowSum = (n / 2) * (1 + n);
  const startPos = ((n - 1) / 2) * (1 + (n - 1));
  
  let oddValues = [];
  for (let i = rowSum, num = 1; i > 0; i--) {
    oddValues.push(num);
    num += 2;
  }
  
  let finalSum = 0;
  for (let i = startPos; i < (startPos + n); i++) {
    finalSum += n === 1 ? 1 : oddValues[i];
  }
  
  return finalSum;
}