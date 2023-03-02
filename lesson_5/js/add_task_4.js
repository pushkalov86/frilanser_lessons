const letter = 'o';

for (let k = 0; k < 3; k++) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      document.write(letter);
      if (j === i) {
        document.write(`<br>`);
        break;
      };
    };
  };
};
