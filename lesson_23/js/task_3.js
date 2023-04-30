function stopWatch (min = 1, max = 800, cur = 1000) {
  const start1 = new Date();
  let arr = [];
  for (let i = 0; i < cur; i++) {
    let randomNumber = Math.floor(min + Math.random() * (max - min + 1));
    arr.push(randomNumber);
  }
  const finish1 = new Date();
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      };
    };
  };
  const start2 = new Date();
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    rightIndex--;
    for (j = rightIndex; j > leftIndex; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    leftIndex++;
  }
  const finish2 = new Date();
  const count1 = finish1 - start1;
  const count2 = finish2 - start2;
  if (count1 > count2) {
    return 'метод бульбашки довший'
  } else if (count1 < count2) {
    return 'метод вставки довший'
  } else return 'час виконання методів рівний';
}

const result = stopWatch();
document.write(result);
