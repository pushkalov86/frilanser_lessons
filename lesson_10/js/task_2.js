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
console.log(randomArray);

function getBigPriceIndexArray(randomArray) {
  let result = [];
  randomArray.forEach((element, index) => {
    if (element > 1000) {
      result.push(index);
    }
  });
  return result;
}

const bigPriceIndexArray = getBigPriceIndexArray(randomArray);
document.write(`Масив індексів: ${bigPriceIndexArray}`);
