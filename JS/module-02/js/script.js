'use strict'




let userInput;

const numbers = [];

userInput = Number(userInput);

while (userInput !== null) {
  userInput = prompt('Введите число');
  if (!isNaN(parseFloat(userInput)) && isFinite(userInput))
  numbers.push(Number(userInput));
else
alert ('Было введено не число, попробуйте еще раз');
}


console.log(numbers);

let total = 0;

for(let item of numbers) {
  total += item
}
console.log(total);
alert(`Общая сумма чисел равна ${total}`);
