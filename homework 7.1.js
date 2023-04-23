const postMatList = [null, null, null, "A001DFX0", null];

let summAcc = 100;
let codeMessage = "A001DFX0";

for (let parcel of postMatList) {
  if (parcel == codeMessage) {
    console.log(
      `Вы получили посылку из ячейки 4 и ваш счет составляет: ${summAcc} р.`
    );
  }
}
