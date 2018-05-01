'use strict'

let placesTaba = 6;
let placesSharm = 15;
let placesHurgada = 25;



const enterPersons = Number(+prompt('Введите число необходимых мест:', '2'));  // '+'--перевод из Null
const isValidNum = enterPersons > 0 && !Number.isNaN(enterPersons) && enterPersons !== 0 && parseInt(enterPersons) === enterPersons ;
const numTaba = isValidNum && enterPersons <= placesTaba;
const numSharm = isValidNum && enterPersons <= placesSharm;
const numHurgada = isValidNum && enterPersons <= placesHurgada;



if (isValidNum) {
  if (numHurgada) {
    if (numTaba) {
      let confirmTaba = confirm ('Есть места в группе Taba?');
      if (confirmTaba) {
        placesTaba = placesTaba - enterPersons;
        alert ('Приятного путешествия в группе Taba!');
      } else {
        alert ('Нам очень жаль, приходите еще!');
      }

  } else if (numSharm) {
    let confirmSharm = confirm ('Есть места в группе Sharm?');
    if (confirmSharm) {
      placesSharm = placesSharm - enterPersons;
      alert ('Приятного путешествия в группе Sharm!');
    } else {
      alert ('Нам очень жаль, приходите еще!');
    }
  }
  else if (numHurgada) {
    let confirmHurgada = confirm ('Есть места в группе Hurgada?');
    if (confirmHurgada) {
      placesHurgada = placesHurgada - enterPersons;
      alert ('Приятного путешествия в группе Hurgada!');
  } else {
    alert ('Нам очень жаль, приходите еще!');
  }
}
  }
  else {
    alert ('Извините, мест нет.');
  }
} else {
  alert( 'Ошибка ввода' );
}
console.log(placesTaba);
console.log(placesSharm);
console.log(placesHurgada);
