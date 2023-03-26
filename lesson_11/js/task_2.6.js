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

function getSumMore200(randomTable, shopsNumber) {
  let sumMore200Array = [];

  for (let shop = 0; shop < shopsNumber ; shop++) {
    for (let i = 0; i < 7; i++) {
      if (randomTable[shop][i] > 200) {
        sumMore200Array.push(randomTable[shop][i]);
      }
    }
  }

  return sumMore200Array;
}

const SumMore200 = getSumMore200(randomTable, 4);
document.write(`прибутки більше за 200: ${SumMore200}.`);
