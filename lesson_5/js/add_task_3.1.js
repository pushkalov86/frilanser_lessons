const letter = 'o';

for (let i = 0; i < 7; i++) {
  for (let j = 6; j >= 0; j--) {
    document.write(letter);
    if (j === i) {
      document.write(`<br>`);
      break;
    };
  };
};
