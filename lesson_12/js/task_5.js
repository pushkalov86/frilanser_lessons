let namesArray=['Innesa', 'Inna', 'Marina', 'Natalia', 'Sveta', 'Anna', 'Olga', 'Julia'];
document.write(`Масив імен: ${namesArray}<br>`);
function getSortNames(namesArray) {
  let change;
  do {
    change=false;
    for (let i = 1; i < namesArray.length; i++) {
      if (namesArray[i - 1] > namesArray[i]) {
        let temp = namesArray[i - 1];
        namesArray[i - 1] = namesArray[i];
        namesArray[i] = temp;
        change = true;
      }
    }
  } while (change);
  return namesArray;
}
getSortNames(namesArray);
document.write(`Відсортований масив: ${namesArray}<br>`);

function includeElement(namesArray,serchEl) {
  let start = 0;
  let end = namesArray.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (namesArray[middle] === serchEl) return middle;
    if (namesArray[middle] < serchEl) start = middle + 1;
    if (namesArray[middle] > serchEl) end = middle - 1;
  }
  return -1;
}

const findEl = includeElement(namesArray, 'Olga');
if (findEl !== -1) {
  document.write(`У масиві є ім'я Olga за індексом ${findEl}`);
} else {document.write(`У масиві відсутне ім'я Olga`)};
