function getResult() {
  let number = Math.floor(Math.random() * 4 + 1);

  return `<img src="/lesson_6/img/` + number + `.png" alt="" width="100px" height="100%">`;
}

const result = getResult();
document.write(result);
