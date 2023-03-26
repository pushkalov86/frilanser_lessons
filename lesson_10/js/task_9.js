function getRandomArray(currentArray, min, max) {
 let randomArray = [];
 for (let i = 0; i < currentArray; i++) {
   const randomElement = min + Math.floor(Math.random()*(max - min + 1));
   randomArray.push(randomElement);
 };
 return randomArray;
};

const randomArray = getRandomArray(10, 1, 10000);
document.write(`Ваш випадковий масив цін від 1 10000: ${randomArray}<br><br>`);

function getSumPriceMore1000 (randomArray) {

  let sumPriceMore1000 = randomArray.reduce((sumPriceMore1000, element) => 
    (element > 1000) ? sumPriceMore1000 + element : sumPriceMore1000, 0);
  return sumPriceMore1000;
}

const sumPriceMore1000 = getSumPriceMore1000(randomArray);
document.write(`Сума цін більших за 1000 дорівнює ${sumPriceMore1000}.`)
