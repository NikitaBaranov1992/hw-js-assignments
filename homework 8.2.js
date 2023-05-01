let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let yearlyExpences1 = [];
for (let objectExpenses of expencesExamples) {
  for (let valueExam of objectExpenses.yearlyExpences) {
    yearlyExpences1.push(valueExam);
  }
}

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
