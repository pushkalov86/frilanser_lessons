const children = ["Іван", "Павло", "Олексій", "Іван", "Сергій", "Павло", "Олексій", "Іван", "Сергій"];

function countNameChild(children) {
  const child = "Іван";
  let currentChild = 0;
  for (let i = 0; i < children.length; i++) {
    if (children[i] === child) {
      currentChild++;
    };
  };

  return currentChild;
};

document.write(`Список учнів 5-А класу: ${children} .<br><br>`)

const NameChild = countNameChild(children);
document.write(`В 5-А класі хлопців з ім'ям Іван є ${NameChild}.`);
