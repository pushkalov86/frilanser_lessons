namesArray = ["Петро", "Евеліна", "Роман", "Едуард", "Марина", "Ольга", "Георгій", "Анна"];
document.write(`Дано масив імен: ${namesArray}<br><br>`);

function getFirstLetterArray() {
  let resultArray = [];
  namesArray.forEach(item => {
    resultArray.push(item[0]);
  });
  return resultArray;
}

const firstLetterArray = getFirstLetterArray();
document.write(`Масив з перших букв кожного елемента масиву: ${firstLetterArray}.`);
