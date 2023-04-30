const str = 'Задача 3. Сформувати масив - з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.';
let exp = /[.,:;-]/g;
let result = str.match(exp);

document.write(`Початкова строка: ${str}<br>`)
document.write(result);
