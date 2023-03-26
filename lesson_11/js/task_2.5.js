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

function getMaxSumMoneyWednesdayShop(randomTable, shopsNumber) {
  let wednesdayShopArray = [];
  for (let shop = 0; shop < shopsNumber ; shop++) {
    wednesdayShopArray.push(randomTable[shop][2])
  }
  let maxSum = Math.max(...wednesdayShopArray);

  return maxSum;
}

const maxSumWednesday = getMaxSumMoneyWednesdayShop(randomTable, 4);
document.write(`найбільша виручка в середу становила: ${maxSumWednesday}.`);
