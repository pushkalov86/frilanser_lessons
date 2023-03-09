const currentArray = parseInt(prompt(`Введіть кількість елементів массиву`));

function getRandomArray(currentArray) {
 const min = 0;
 const max = 10;
 
 let randomArray = [];
 for (let i = 0; i < currentArray; i++) {
   const randomElement = min + Math.floor(Math.random()*(max - min + 1));
   randomArray.push(randomElement);
 }

 return randomArray;
}

const randomArray = getRandomArray(currentArray);
document.write(`Випадковий массив: ${randomArray}<br><br>`);

function getResultArray(randomArray) {
 let resultArray = [];
 for (let item of randomArray) {
   if (item > randomArray[0]) {
     resultArray.push(item * 2);
   } else {
    resultArray.push(item);
   }
 }
 return resultArray;
}

const resultArray = getResultArray(randomArray);
document.write(`Результат: ${resultArray}<br><br>`);
