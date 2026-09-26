function createPhoneNumber(numbers){
  const firstSection = numbers.slice(0, 3).toString().replaceAll(",", "");
  const secondSection = numbers.slice(3, 6).toString().replaceAll(",", "");
  const thirdSection = numbers.slice(6, 10).toString().replaceAll(",", "");
  return `(${firstSection}) ${secondSection}-${thirdSection}`;
}
  
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"