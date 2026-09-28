function narcissistic(value) {
  let finalNum = 0;
  value.toString().split("").forEach(num => {
    finalNum += parseInt(num) ** value.toString().length;
  });
  if (finalNum === value) {
    return true;
  }
  return false;
}