function getResultArray(current) {
  let currentArray = new Array(current).fill(0);
  let resultArray =[];
  currentArray.forEach((element, current) => {
    if (current % 2 === 0) {
      resultArray.push(0);
    } else {
      resultArray.push(1);
    }
  });
  return resultArray;
};

const resultArray = getResultArray(17);
document.write(resultArray);
