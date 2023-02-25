let count = 1;
for (let q = 0; q < 3; q++) {

  document.write(`<table border="2px">`);

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
}

