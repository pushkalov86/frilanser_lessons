let counter = parseInt(prompt(`Введіть кількість абзаців`));

let title = 1;


for (; title <= counter; title++) {
  document.write(`
    <h1>Заголовок ${title}</h1>
  `)
  let paragraf = 1;
  for (let i = 1; i <= title; i++) {
    document.write(`
      <p>Розділ ${title}, параграф ${paragraf}</p>
    `)
    paragraf++;
  }
  document.write(`<hr>`)
}
