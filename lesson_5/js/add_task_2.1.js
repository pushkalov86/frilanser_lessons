const letter = 'o';
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7;j++) {
    document.write(letter);
    if (j === i) {
      document.write(`<br>`);
      break;
    }
  }
}
