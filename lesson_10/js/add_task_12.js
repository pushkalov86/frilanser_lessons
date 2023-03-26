function getResultArray(n) {
  let currentArray = new Array(n).fill(1);
  let resultArray = [];
  let current = 1;

  currentArray.forEach((element, index) => {
    if (index < Math.floor(n / 2)) {
      resultArray.push(current);
      current++;
    }
    if (index >= n / 2) {
      current--;
      resultArray.push(current);
    }
  });

  return resultArray;
};

const n = parseInt(prompt(`Введіть кількість елементів масиву`));

const resultArray = getResultArray(n);
document.write(resultArray);
