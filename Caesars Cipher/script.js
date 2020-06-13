function rot13(str) {
  let charArray = [];
  const regEx = /[A-Z]/;
  str = str.split("");
  for (let i in str) {
    if (regEx.test(str[i])) {
      charArray.push(((str[i].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      charArray.push(str[i].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, charArray);
  return str;
}
