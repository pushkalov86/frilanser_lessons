const str = 'Я народився в Сумах 29.01.1986 року';
let exp = /[0-2][0-9].[0-3][0-9].\d{4}/;
let result = str.match(exp);

document.write(`Початкова строка: ${str}<br>`)
document.write(result);
