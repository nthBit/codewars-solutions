function inArray(array1,array2){
  const array3 = [];
  
  array2.forEach(word2 => {
    array1.forEach(word1 => {
      if (word2.includes(word1) && !(array3.includes(word1))) {
        array3.push(word1);
      }
    });
  });
  
  return array3.sort();
}
​