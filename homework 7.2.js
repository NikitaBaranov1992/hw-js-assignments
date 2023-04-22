const players = [
  { id: 1, name: "Ivan", scorePoints: 4500 },
  { id: 2, name: "Petr", scorePoints: 3600 },
  { id: 3, name: "Vadim", scorePoints: 3433 },
  { id: 4, name: "Olga", scorePoints: 2356 },
];

const playersList = [];

for (let player of players) {
  playersList.push(player.scorePoints);
}
console.log(playersList);

let maxScorePoints = Math.max(...playersList);
console.log(maxScorePoints);

let maxScorePoints2 = Math.max.apply(null, playersList); //Попробовал сделать через Math.max.apply
console.log(maxScorePoints2);

/*Тестовые данные - массив  объектов players, выведите в консоль игрока с максимальным значением 
scorePoints (Используйте цикл, обращение к свойству через точку и метод глобального объекта Math, 
    позволяющий найти большее число из всех возможных).
Для этого создайте пустой массив для хранения очков, используя цикл, заполните его значениями из данного вам массива.
Изучите spread опреатор (...), позволяющий развернуть данные из результирующего массива всех очков игроков в метод объекта Math.*/
