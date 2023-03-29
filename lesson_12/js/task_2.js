function getRandomNumber(current) {
  let randomArray = [];
  let min = 0;
  let max = 9;
  for (let i = 0; i < current; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1));
    randomArray.push(randomNumber);
  };
  return randomArray;
};

let randomArray = getRandomNumber(30);
document.write(`Рандомний масив : ${randomArray}.<br>`);

function getSortArray2 (randomArray) {
  let count = 0;
  let leftIndex = 0;
  let rightIndex = randomArray.length - 1;

  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
      if (randomArray[i] > randomArray[i + 1]) {
        let temp = randomArray[i];
        randomArray[i] = randomArray[i + 1];
        randomArray[i + 1] = temp;
        count++;
      }
    }
    rightIndex--;
    for (j = rightIndex; j > leftIndex; j--) {
      if (randomArray[j] < randomArray[j - 1]) {
        let temp = randomArray[j];
        randomArray[j] = randomArray[j - 1];
        randomArray[j - 1] = temp;
        count++;
      }
    }
    leftIndex++;
  }
  return count;
}

 let sortArrayCount2 = getSortArray2(randomArray);
 document.write(`Кількість обмінів під час сортування даного рандомного масиву методом змішування: ${sortArrayCount2}.<br>`);
 document.write(`Рандомний масив : ${randomArray}.<br>`);
