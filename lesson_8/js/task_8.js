function getRandomArray() {
  let min = -500;
  let max = 500;
  let randomArray = [];

  for (let i = 0; i <= 9; i++) {
    let randomNumber = min + Math.floor(Math.random() * (max - min + 1));
    randomArray.push(randomNumber);
  }

  return randomArray;
}

const randomArray = getRandomArray();
document.write(`В массиві знаходились такі виграші:  ${randomArray}.<br>`);


function getLottery(randomArray) {
  result = 0;
  for (let i = 0; i < Infinity; i++) {
    const lottery = parseInt(prompt(`Введіть номер ячейки від 0 до 9, в якій знаходиться ваш виграш`));
    if (!isFinite(lottery)) {
      return result;
    };
    result += randomArray[lottery - 1];
  };
  return result;
};

const winSum = getLottery(randomArray);
document.write(`Ваш виграш склав ${winSum}`);
