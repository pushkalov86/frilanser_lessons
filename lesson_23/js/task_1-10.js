const str = 'Я народився в Сумах 29.01.1986 року';
let count = 0;
let exp = /[^0-9]/g
let result = str.replace(exp, ' ').trim().split(' ')
let res = [];
for (let i of result) {
  if (i.length === 2) {
    res.push(i)
  }
}

document.write(`Початкова строка: ${str}<br>`)
document.write(`Кількість двоцифрових чисел в рядку: ${res.length}.`);

