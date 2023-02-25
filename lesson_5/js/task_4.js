document.write(`<table border="2px">`);

for (let j = 0; j < 3; j++) {
  document.write(`
    <tr>
  `)
  for (let i = 0; i < 7; i++) {
    document.write(`
      <th>
        ${i + 1}
      </th>
    `)
  }
  document.write(`</tr>`)
}

document.write(`</table>`)
