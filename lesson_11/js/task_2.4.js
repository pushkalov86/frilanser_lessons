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

const randomTable = getRandomTable(4, 20, 100);
document.write(`${randomTable[0]}<br><br>`);
document.write(`${randomTable[1]}<br><br>`);
document.write(`${randomTable[2]}<br><br>`);
document.write(`${randomTable[3]}<br><br>`);
document.write(`<br><br>`);

function getSumMoneyWorkDaysShops(randomTable, shopsNumber) {
  let sumMoney = 0;

  for (let i = 0; i < shopsNumber; i++) {
    for (let j = 5; j < 7; j++) {
      sumMoney += randomTable[i][j];
    }
  }

  return sumMoney;
}

const sumMoneyArray = getSumMoneyWorkDaysShops(randomTable, 4);
document.write(`прибуток магазинів за вихідні дні: ${sumMoneyArray}.`);
