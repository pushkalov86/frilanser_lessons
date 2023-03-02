function getResult1(num) {
  let current = num * 0.3937;

  return num + ' сантиметрів = ' + current.toFixed(2) + ' дюймів.';
}

function getResult2(num) {
  let current = num * 2.2046;

  return num + ' кілограмів = ' + current.toFixed(2) + ' фунтів.';
}

function getResult3(num) {
  let current = num * 0.621371192;

  return num + ' кілометрів = ' + current.toFixed(2) + ' миль.';
}

const num = parseFloat(prompt(`Введіть число`));

const result1 = getResult1(num);
const result2 = getResult2(num);
const result3 = getResult3(num);
document.write(`${result1}<br>${result2}<br>${result3}`);
