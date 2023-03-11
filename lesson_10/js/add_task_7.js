function getResultArray(n) {
  let currentArray = new Array(n).fill(1);
  let temp = 0;
  let resultArray = [];

  currentArray.forEach((element, index, arr) => {
    if (index === 0) {
      resultArray.push(0);
    } else if (index === 1) {
      resultArray.push(1);
    } else {
      resultArray.push(resultArray[index - 2] + resultArray[index - 1]);
    }
  })

  return resultArray;
};

const n = parseInt(prompt(`Введіть кількість елементів масиву`));

const resultArray = getResultArray(n);
document.write(resultArray);
