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

function getSortArray (randomArray) {
  let cloneArray = randomArray.map(el => el);
  let count = 0;
  const arrLength = cloneArray.length - 1;
  for (let i = 0; i < arrLength; i++) {
    for(let j = 0; j < arrLength; j++) {
      if (cloneArray[j] > cloneArray[j + 1]) {
        let temp = cloneArray[j];
        cloneArray[j] = cloneArray[j + 1];
        cloneArray[j + 1] = temp;
        count++;
      };
    };
  };

  return count;
}

 let sortArrayCount = getSortArray(randomArray);
 document.write(`Кількість обмінів під час сортування даного рандомного масиву сортуванням бульбашкою : ${sortArrayCount}.<br>`)
 document.write(`Рандомний масив : ${randomArray}.<br>`);

function getSortArray2 (randomArray) {
  let cloneArray = randomArray.map(el => el);
  let count = 0;
  let leftIndex = 0;
  let rightIndex = cloneArray.length - 1;

  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
      if (cloneArray[i] > cloneArray[i + 1]) {
        let temp = cloneArray[i];
        cloneArray[i] = cloneArray[i + 1];
        cloneArray[i + 1] = temp;
        count++;
        document.write(`${cloneArray}<br>`);
      }
    }
    rightIndex--;
    for (j = rightIndex; j > leftIndex; j--) {
      if (cloneArray[j] < cloneArray[j - 1]) {
        let temp = cloneArray[j];
        cloneArray[j] = cloneArray[j - 1];
        cloneArray[j - 1] = temp;
        count++;
        document.write(`${cloneArray}<br>`);
      }
    }
    leftIndex++;
  }
  return count;
}

 let sortArrayCount2 = getSortArray2(randomArray);
 document.write(`Кількість обмінів під час сортування даного рандомного масиву методом змішування: ${sortArrayCount2}.<br>`);
 document.write(`Рандомний масив : ${randomArray}.<br><br><br>`);

function getInsertSort (randomArray) {
  let cloneArray = randomArray.map(el => el);
  let count = 0;
  for (let i = 1; i < cloneArray.length; i++) {
    const currentEl = cloneArray[i];
    let j = i - 1;
    while (j >= 0 && cloneArray[j] > currentEl) {
      cloneArray[j + 1] = cloneArray[j];
      j = j - 1;
      count++;
    };
    cloneArray[j + 1] = currentEl;
    document.write(`${cloneArray}<br>`);
  }

  return count;
}

 let sortInsertSort = getInsertSort(randomArray);
 document.write(`Кількість обмінів під час сортування даного рандомного масиву методом змішування: ${sortInsertSort}.`)
