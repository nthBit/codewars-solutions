function freqSeq(str, sep) {
  const arr = [...str];
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    newArr.push(str.split(arr[i]).length - 1);
    if (i < (arr.length - 1)) {
      newArr.push(sep);
    }
  }
​
  return newArr.join("");
}