function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function getPlus(x, y) {
  x++;
  x += y;
  return x;
}

function getMinus(x, y) {
  x--;
  x *= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 4000));
console.log(getRestAfterDivision(7000, 3));
console.log(getPlus(50, 15));
console.log(getMinus(2, 10));

/* Добавьте в .md файл описание инкремента и декремента, а также добавьте в скрипт 2 функции для нашего расчета 
- одну с инкрементом и вторую с декрементом, соответственно.Вызовите функции и выведите в консоль их результаты */
