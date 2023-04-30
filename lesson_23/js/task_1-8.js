const str = 'Задача3. Сформувати масив з 1000 елементів, від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.';
let exp = /[.,:;-]/;
let result = []
let res = str.split(' ');

for (let i of res) {
  if (exp.test(i)) {
result.push(i);
  }
}

document.write(`Початкова строка: ${str}<br>`)
document.write(result);
