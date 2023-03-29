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
  let count = 0;
  const arrLength = randomArray.length - 1;
  for (let i = 0; i < arrLength; i++) {
    for(let j = 0; j < arrLength; j++) {
      if (randomArray[j] > randomArray[j + 1]) {
        let temp = randomArray[j];
        randomArray[j] = randomArray[j + 1];
        randomArray[j + 1] = temp;
        count++;
      };
    };
  };

  return count;
}

 let sortArrayCount = getSortArray(randomArray);
 document.write(`Кількість обмінів під час сортування даного рандомного масиву сортуванням бульбашкою: ${sortArrayCount}.`)
 document.write(`Рандомний масив : ${randomArray}.<br>`);
