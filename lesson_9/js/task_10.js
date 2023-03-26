const currentArray = parseInt(prompt(`Введіть кількість елементів массиву`));

function getRandomArray(currentArray) {
 const min = 100;
 const max = 200;
 
 let randomArray = [];
 for (let i = 0; i < currentArray; i++) {
   const randomElement = min + Math.floor(Math.random()*(max - min + 1));
   randomArray.push(randomElement);
 }

 return randomArray;
}

const randomArray = getRandomArray(currentArray);
document.write(`Випадковий массив цін: ${randomArray}<br><br>`);

function getResultArray(randomArray) {
  const tax = 0.2;
  let resultArray = randomArray.map(item => Math.floor(item * tax));
  return resultArray;
}

const resultArray = getResultArray(randomArray);
document.write(`Масив податків: ${resultArray}`);
