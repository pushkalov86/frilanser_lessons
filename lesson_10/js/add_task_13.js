function getResultArray() {
  let resultArray = [];
  let current = 0;
  let max = 9;

  while (current < 2) {
    let randomNumber = Math.floor(Math.random() * (max + 1));
    if (current < 2 && randomNumber !== 1) {
      resultArray.push(randomNumber);
    } else if (current < 2 && randomNumber === 1) {
      resultArray.push(randomNumber);
      current++;
    } else if (current === 2) {
      break;
    }
  }

  return resultArray;
};

const resultArray = getResultArray();
document.write(resultArray);
