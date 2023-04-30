const arr = ['автобус 23', 'крн 22т', 'екскаватор', 'пзд', 'король Lir1'];
let result = [];

for (let i of arr) {
  let num = /[13]/;
  if (num.test(i)) {
    result.push(i)
  }
}
document.write(`Початковий масив: ${arr}<br>`)
document.write(result);
