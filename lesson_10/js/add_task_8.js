function getResultArray(n) {
  let currentArray = new Array(n).fill(1);
  let naturalArray = [1, 2, 3, 5, 7];
  let resultArray = [];
  // let min = 0;
  let max = naturalArray.length - 1;

  currentArray.forEach((element, n) => {
    let randomIndex = Math.floor(Math.random() * (max + 1));
    resultArray.push(naturalArray[randomIndex]);
  })

  return resultArray;
};

const n = parseInt(prompt(`Введіть кількість елементів масиву`));

const resultArray = getResultArray(n);
document.write(resultArray);
