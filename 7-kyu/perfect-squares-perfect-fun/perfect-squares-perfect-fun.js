function squareIt(int) {
  const numStr = int.toString();
  const sqRoot = Math.sqrt(numStr.length);
  const numRow = numStr.length / Math.sqrt(numStr.length);
  
  if (sqRoot % 1 === 0) {
    if (numRow > 1) {
      let block = "";
      
      for (let i = 0; i < numStr.length; i += numRow) {
        block += numStr.substring(i, (numRow + i));
        if (i < (numStr.length - numRow)) {
          block += "\n";
        } 
      }
      
      return block;
      
    } else if (numRow === 1) {
      return numStr;
    }
  }
  
  return 'Not a perfect square!';
}