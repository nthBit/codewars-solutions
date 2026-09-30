function dirReduc(arr){
  const pair1 = ["north", "south"];
  const pair2 = ["west", "east"];
​
  for (let i = 0; i < arr.length - 1; i++) {
    let pos0 = arr[i].toLowerCase();
    let pos1 = arr[i + 1].toLowerCase();
    
    if (pair1.includes(pos0) && pair1.includes(pos1)) {
      if (pos0 !== pos1) {
        arr.splice(i, 2);
        i = -1;
      }
    } else if (pair2.includes(pos0) && pair2.includes(pos1)) {
        if (pos0 !== pos1) {
          arr.splice(i, 2);
          i = -1;
        }
      }
  }
  
  return arr;
}