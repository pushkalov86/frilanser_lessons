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

function getChangePrice(randomArray) {
  let numberChangePrice = 0;
  let firstElement = randomArray[0];
  randomArray.forEach(element => {
    (element !== firstElement)
      numberChangePrice++;
      firstElement = element;
  });
  return numberChangePrice;
}
const numberChangePrice = getChangePrice(randomArray);
document.write(`Кількість змін ціни: ${numberChangePrice}`);
