function getRandomNumber(minV, maxV) {
  return minV + Math.floor(Math.random() * (maxV - minV + 1));
};

function getRandomMoneyArray(minV, maxV) {
  let week = 7;
  let arr = [];
  for (let i = 0; i < week; i++) {
    const randNum = getRandomNumber(minV, maxV);
    arr.push(randNum);
  };
  return arr;
};

function getRandomTable(shopsNumber, minV, maxV) {
  let table = [];
  for (let shopNumber = 0; shopNumber < shopsNumber; shopNumber++) {
    const randShop = getRandomMoneyArray(minV, maxV);
    table.push(randShop);
  };
  return table;
};

const randomTable = getRandomTable(4, 100, 300);
document.write(`${randomTable[0]}<br><br>`);
document.write(`${randomTable[1]}<br><br>`);
document.write(`${randomTable[2]}<br><br>`);
document.write(`${randomTable[3]}<br><br>`);
document.write(`<br><br>`);

function getSumSort(randomTable) {

  randomTable.sort((a, b) => {
    if (a.reduce((prev, value) => prev + value) > b.reduce((prev, value) => prev + value)) return -1;
    if (a.reduce((prev, value) => prev + value) < b.reduce((prev, value) => prev + value)) return 1;
    return 0;
  })
}

getSumSort(randomTable, 4);

document.write(`${randomTable[0]}<br><br>`);
document.write(`${randomTable[1]}<br><br>`);
document.write(`${randomTable[2]}<br><br>`);
document.write(`${randomTable[3]}<br><br>`);
document.write(`<br><br>`);
