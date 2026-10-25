function duplicateSandwich(a) {
  for (let index1 = 0; index1 < a.length; index1++) {
    for (let index2 = index1 + 1; index2 < a.length; index2++) {
      if (a[index1] === a[index2]) {
        return a.slice([index1 + 1], [index2]);
      }
    }
  }
}