function createPhoneNumber(numbers){
  let template = "(XXX) XXX-XXXX";
  
  numbers.forEach(num => {
    template = template.replace("X", num);
  });
  
  return template;
}
