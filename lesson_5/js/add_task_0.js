let letter = "A";
let charCode = letter.charCodeAt(0);

for (let j = 0; j < 5; j++) {
  for (let i = 1; i < 6; i++) {
    result = String.fromCharCode(charCode);
    document.write(result);
    charCode = ++charCode;
    if (i % 5 === 0) {
      document.write(`<br>`);
      charCode = charCode - 4;
      break;
    };
  };
};
