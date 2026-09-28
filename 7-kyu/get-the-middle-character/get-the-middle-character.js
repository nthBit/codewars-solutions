function getMiddle(s) {
  const stringLength = s.length;
  if (stringLength % 2 === 0) {
    const lower = Math.floor(stringLength / 2) - 1;
      console.log(lower);
    const upper = Math.ceil((stringLength + 1) / 2) - 1;
      console.log(upper);
    return `${s[lower]}${s[upper]}`;
  } else {
    const middle = Math.floor(stringLength / 2);
      console.log(middle);
    return `${s[middle]}`;
  }
}