function getTable(row, column) {
  document.write(`<table border="2px" width="200px" height="200px">`);

  for (let i = 0; i < row; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < column; j++) {
      document.write(`<th></th>`);
      if (j ===column - 1) {
        document.write(`</tr>`)
      }
    }
  }
  document.write(`</table>`)
}

const row = parseFloat(prompt(`Введіть кількість рядків таблиці`));
const column = parseFloat(prompt(`Введіть кількість стовпців таблиці`));
const result = getTable(row, column);
