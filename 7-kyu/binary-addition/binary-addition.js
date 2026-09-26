function addBinary(a, b) {
  let decimalNum = a + b;
  let binaryNum = "";
  
  if (decimalNum === 0) {
    binaryNum = "0";
  } else {
      while (decimalNum > 0) {
        if (decimalNum % 2 === 0) {
          decimalNum = decimalNum / 2;
          binaryNum = "0" + binaryNum;
        } else if (decimalNum % 2 === 1) {
            decimalNum = Math.floor(decimalNum / 2);
            binaryNum = "1" + binaryNum;
          }
      }
    }
  return binaryNum;
}
​
addBinary(300, 150);