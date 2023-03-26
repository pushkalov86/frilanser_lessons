function getResultArray(n) {
  let currentArray = new Array(n).fill(1);
  let resultArray = [];

  currentArray.forEach((element, index) => {
    if (index%2 === 0) {
      resultArray.push(1);
    } else {
      resultArray.push(index % 5);
    };
  });

  return resultArray;
};

const n = parseInt(prompt(`Введіть кількість елементів масиву`));

const resultArray = getResultArray(n);
document.write(resultArray);
