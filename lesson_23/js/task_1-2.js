const arr = ['автобус 23', 'кран 22т', 'екскаватор', 'поїзд', 'stinger1', 'король Lir'];
let result = [];
for (let i of arr) {
  let num = /[0-9]/;
  if (!num.test(i)) {
    result.push(i)
  }
}
document.write(`Початковий масив: ${arr}<br>`)
document.write(result);
