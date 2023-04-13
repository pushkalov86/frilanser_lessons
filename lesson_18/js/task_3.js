function getAge() {
  const date = new Date;
  const yearToday = date.getFullYear();

  const yearOfBith = document.getElementById('yearOfBith').value;
  const age = yearToday - yearOfBith;

  document.getElementById('age').value = age;
}
