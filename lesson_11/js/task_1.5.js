function getRandomNumber(minV, maxV) {
  return minV + Math.floor(Math.random() * (maxV - minV + 1));
};

function getRandomArray(arrLength, minV, maxV) {
  let arr = [];
  for (let i = 0; i < arrLength; i++) {
    const randNum = getRandomNumber(minV, maxV);
    arr.push(randNum);
  };
  return arr;
};

function getRandomTable(rowsNumber, colsNumber, minV, maxV) {
  let table = [];
  for (let rowNumber = 0; rowNumber < rowsNumber; rowNumber++) {
    const randRow = getRandomArray(colsNumber, minV, maxV);
    table.push(randRow);
  };
  return table;
};

const randomTable = getRandomTable(4, 4, 0, 9);
document.write(`${randomTable[0]}<br>`);
document.write(`${randomTable[1]}<br>`);
document.write(`${randomTable[2]}<br>`);
document.write(`${randomTable[3]}<br>`);
document.write(`<br><br>`);

function getSumElementsArray(randomTable) {
  let sumElements = 0;
  for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < 4; j++) {
        sumElements += randomTable[i][j];
      }
    }
  }
  return sumElements;
}

const sumElementsArray = getSumElementsArray(randomTable);
document.write(`Сума чисел парних рядків дорівнює: ${sumElementsArray}.`);
