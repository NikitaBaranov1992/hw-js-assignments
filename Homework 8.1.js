//посчитал сумму через цикл и условие if
const yearlyExpences1 = [
  2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
];

let sumFirst = 0;

for (let i = 0; i < yearlyExpences1.length; i++) {
  if (yearlyExpences1[i] > 1000) {
    sumFirst += yearlyExpences1[i];
  }
}
console.log(sumFirst);

//отфильтровал первоначальный цикл и посчитал сумму через reduce
const yearlyExpences1 = [
  2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
];

const bigExp = yearlyExpences1.filter((exp) => {
  return exp > 1000;
});

console.log(bigExp);

let sum = bigExp.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum);

/*Дан массив с расходами за 12 месяцев - yearlyExpences.
Необходимо создать функцию, содержащую расчет суммы затрат, которые даны в массиве - в расчет берутся суммы только выше 1000. 
Расчет производится только для одного массива yearlyExpences.

Создать тестовую функцию, которая будет проверять, что расчет суммы затрат производится верно. 
Проверить расчет на данных тестовых объектах (используйте forEach()):

let expencesExamples = [
 { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
 { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
 { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
];

То есть, ваша тестовая функция должна быть вызвана внутри цикла forEach() и цикл пройдет три раза по данному массиву тестовых объектов.*/
