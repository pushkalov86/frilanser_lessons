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

function isAllPriceMore1000 (randomArray) {
  return randomArray.every(element => element > 1000);
}

const allPriceMore1000 = isAllPriceMore1000(randomArray);
if (allPriceMore1000) {
  document.write(`Так, всі елементи більше тисячі.`);
} else document.write(`Ні, не всі елементи більше тисячі.`);
