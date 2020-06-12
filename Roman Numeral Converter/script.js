function convertToRoman(num) {
  const convert = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (let i in convert) {
    while (num >= convert[i]) {
      roman += i;
      num -= convert[i];
    }
  }
  return roman;
}

convertToRoman(36);
