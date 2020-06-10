function palindrome(str) {
  str = str
    .replace(
      /[\ |\~|`|\!|\@|\#|\$|\%|\^|\&|\*||||\-|\_|\+|\=|\||\||||\{|\(|\)|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
      ""
    )
    .toLowerCase();
  if (str.split("").reverse().join("") === str) {
    return true;
  } else {
    return false;
  }
}
