let summAcc = 100
let codeSms = "A001DFX0"

let ourCode = "A001DFX0"


if (codeSms == ourCode) {
     console.log(`Вы получили посылку из ячейки 4 и ваш счет составляет: ${summAcc} р.`);
}


/*Получаем посылку в постамате.
тестовые данные: пользователь имеет - сумма 100р на счете
Код для получения посылки пришел в смс оповещении A001DFX0
Текст из смс… ваша посылка находится в ячейке под номером 4

Постамат имеет вид - [null, null, null, “4 - ваша посылка” , null]

В условии проверьте, если наш код равен коду из смс, то выведем в консоль данные о нашей посылке,
 и спишем со счета 100р в формате “Вы получили посылку из ячейки 4 и ваш счет составляет: …р.”