document.write(`<table border="2px">`);
let count = 1;
for (let j = 0; j < 3; j++) {
  document.write(`
    <tr>
  `)


  for (let i = 0; i < 3; i++) {
    document.write(`
      <th>
        ${count++}
      </th>
    `)
  }
  document.write(`</tr>`)
}

document.write(`</table>`)
