//взял один массив чисел из задания
let yearlyExpences1 = [
  2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
];

//создал новый массив, где числа больше 1000
let indexExp = [];

for (let i = 0; i < yearlyExpences1.length; i++) {
  if (yearlyExpences1[i] > 1000) {
    indexExp.push(i);
  }
}

console.log(indexExp);

//Создал массив с датами, где числа больше 1000, попробовал преобразовать в месяцы в форме строки
let monthExp = [];

for (let i = 0; i < indexExp.length; i++) {
  let options = {
    month: "long",
  };
  let dateExp = new Date(2022, indexExp[i]);
  let needMonth = dateExp.toLocaleDateString("ru", options);
  monthExp.push(needMonth);
}
console.log(monthExp);
