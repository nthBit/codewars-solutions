function descendingOrder(n){
  const toArray = Array.from(n.toString());
  const sortArray = toArray.sort((a, b) => b - a);
  return parseInt(sortArray.join(""));
}