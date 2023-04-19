function increaseBalance(x, y) {
  a = x + y;
  return a;
}

function decreaseBalance(x, y) {
  a = x - y;
  return a;
}

function divideBalanceByAccounts(x, y) {
  a = x / y;
  return a;
}

function getRestAfterDivision(x, y) {
  a = x % y;
  return a;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 4000));
console.log(getRestAfterDivision(7000, 3));
