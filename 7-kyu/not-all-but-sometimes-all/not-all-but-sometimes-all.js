function remove(str, what) {
  
  for (let [key, value] of Object.entries(what)) {
    for (let i = 0; i < value; i++) {
      str = str.replace(key, "");
    }
  }
  
  return str;
}