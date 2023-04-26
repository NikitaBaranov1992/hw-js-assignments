// тут посчитал сумму, если число больше 1000. сделал функцию bigSumm

yearlyExpences1 = [
  2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
];
let sumFirst = 0;

function bigSumm(yearlyExpences1) {
  for (let i = 0; i < yearlyExpences1.length; i++) {
    if (yearlyExpences1[i] > 1000) {
      sumFirst += yearlyExpences1[i];
    }
  }
  return sumFirst;
}
console.log(bigSumm(yearlyExpences1));

// Тут попытался через forEach отобрать только те цифры, которые больше 1000

let exp = 0;
const yearlyExpences2 = [
  2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
];
yearlyExpences2.forEach((exp) => {
  if (exp > 1000) console.log(exp);
});
