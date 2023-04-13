function getConvert() {
  const kursEvro = 40.5;
  const kursDolar = 37.4;
  const sumGrn = parseFloat(document.getElementById('first').value);
  const convertEvro = sumGrn * kursEvro;
  const convertDolar = sumGrn * kursDolar;

  document.getElementById('evro').value = convertEvro.toFixed(2);
  document.getElementById('dolar').value = convertDolar.toFixed(2);
}
