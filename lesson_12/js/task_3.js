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

function getInsertSort (randomArray) {
  let count = 0;
  for (let i = 1; i < randomArray.length; i++) {
    const currentEl = randomArray[i];
    let j = i - 1;
    while (j >= 0 && randomArray[j] > currentEl) {
      randomArray[j + 1] = randomArray[j];
      j = j - 1;
      count++;
    };
    randomArray[j + 1] = currentEl;
  }

  return count;
}

 let sortInsertSort = getInsertSort(randomArray);
 document.write(`Кількість обмінів під час сортування даного рандомного масиву методом сортування включеннями: ${sortInsertSort}.<br>`)
 document.write(`Рандомний масив : ${randomArray}.<br>`);
