function transposeTwoStrings(array) {
  const minLen = Math.min(array[0].length, array[1].length);
  const maxLen = Math.max(array[0].length, array[1].length);
  let template = "";
​
  (function() {
    for (let i = 0; i < maxLen; i++) {
      template += i < minLen ? "A B" : "A  B";
      template += i < maxLen - 1 ? "\n" : "";
    }
  })();
​
  for (let letter of array[0]) {
    template = template.replace("A", letter);
  }
​
  for (let letter of array[1]) {
    template = template.replace("B", letter);
  }
​
  for (let letter of template) {
    template = template.replaceAll("A", "");
    template = template.replaceAll("B", "");
  }
​
  return template;
}
​