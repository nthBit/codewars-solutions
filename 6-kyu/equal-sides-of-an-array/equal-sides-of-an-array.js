function findEvenIndex(arr) {
  for (let N = 0; N < arr.length; N++) {
    const startN = N;
    let left = 0;
    for (let i = N; i > -1; i--) {
      if (i !== startN) {
        left += arr[i];
      }
    }
    let right = 0;
    for (let i = N; i < arr.length; i++) {
      if (i !== startN) {
        right += arr[i];
      }
    }
    if (left === right) {
      return N;
    }
  }
  return -1;
}