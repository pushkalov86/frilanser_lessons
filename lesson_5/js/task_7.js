let counter = parseInt(prompt(`Введіть кількість абзаців`));

for (let title = 1; title <= counter; title++) {
  document.write(`
    <h1>Заголовок ${title}</h1>
  `)

  for (let i = 1; i <= title; i++) {
    document.write(`
      <p>Розділ ${title}, параграф ${i}</p>
    `)
  }
  document.write(`<hr>`)
}
