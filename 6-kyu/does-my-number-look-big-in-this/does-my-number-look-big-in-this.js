function narcissistic(value) {
  const digits = value.toString();
  let finalNum = 0;
  
  digits.split("").forEach(num => {
    finalNum += parseInt(num) ** digits.length;
  });
  if (finalNum === value) {
    return true;
  }
  
  return false;
}