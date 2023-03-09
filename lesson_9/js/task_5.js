 const currentArray = parseInt(prompt(`Введіть кількість елементів массиву`));

 function getRandomArray(currentArray) {
  const min = -9;
  const max = 9;
  
  let randomArray = [];
  for (let i = 0; i < currentArray; i++) {
    const randomElement = min + Math.floor(Math.random()*(max - min + 1));
    randomArray.push(randomElement);
  }

  return randomArray;
}

const randomArray = getRandomArray(currentArray);
document.write(`Випадковий массив: ${randomArray}<br><br>`);

function getResultArray() {
  // let resultArray = [];
  // for (let item of randomArray) {
  //   if (item > 0) {
  //     resultArray.push(item);
  //   }
  // }
  let resultArray = randomArray.filter(element => element > 0);

  return resultArray;
}

const resultArray = getResultArray(currentArray);

function getMultResult(resultArray) {
  let multResult;
  if (resultArray.length === 0) {
    return 'В масиві немає додатніх чисел';
  }
  if (resultArray.length === 1) {
    multResult = resultArray[0];
    return multResult;
  }
  if (resultArray.length > 1) {
    multResult === resultArray[0]
    // for (let i = 1; i < resultArray.length; i++) {
    //   multResult = multResult * resultArray[i];
    // }
    multResult = resultArray.reduce((prevResult, multResult) => prevResult * multResult);

    return multResult;
  }
}

const multResult = getMultResult(resultArray);
document.write(`Добуток додатніх чисел масиву дорівнює: ${multResult}<br><br>`);
