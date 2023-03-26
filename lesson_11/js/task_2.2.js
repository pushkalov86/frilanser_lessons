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

function getSumMoneyDayWeekShop(randomTable, shopsNumber) {
  let sumDayWeekShopArray = [];
  let sumMoney = 0;
  let day = 0;
  for (let d = 0; d < 7; d++) {
    for (let i = 0; i < shopsNumber; i++) {
      for (let j = 0; j < 7; j++) {
        if (j === day) {
          sumMoney += randomTable[i][j];
        }
      }
    }
    sumDayWeekShopArray.push(sumMoney);
    sumMoney = 0;
    day++;
  }

  return sumDayWeekShopArray;
}

const sumMoneyArray = getSumMoneyDayWeekShop(randomTable, 4);
document.write(`Виручка всіх магазинів за кожен днь тижня відповідно: ${sumMoneyArray}.`);
