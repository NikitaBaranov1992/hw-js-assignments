//Соединение 3 массивов в один большой

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

let allExamples = [];
for (let objectExpenses of expencesExamples) {
  for (let valueExam of objectExpenses.yearlyExpences) {
    allExamples.push(valueExam);
  }
}
//console.log(allExamples);

//функция по расчету суммы через for:
let sumFirst = 0;
function bigSumm() {
  for (let i = 0; i < allExamples.length; i++) {
    if (allExamples[i] > 1000) {
      sumFirst += allExamples[i];
    }
  }
  return sumFirst;
}
console.log(bigSumm());

//через forEach:
let summExp = 0;
allExamples.forEach(function (exp) {
  if (exp > 1000) {
    summExp += exp;
  }
});
console.log(summExp);
