// 'use strict'
//
// let placesTaba = 6;
// let placesSharm = 15;
// let placesHurgada = 25;
//
//
//
// const enterPersons = Number(+prompt('Введите число необходимых мест:', '2'));  // '+'--перевод из Null
// const isValidNum = enterPersons > 0 && !Number.isNaN(enterPersons) && enterPersons !== 0 && parseInt(enterPersons) === enterPersons ;
// const numTaba = isValidNum && enterPersons <= placesTaba;
// const numSharm = isValidNum && enterPersons <= placesSharm;
// const numHurgada = isValidNum && enterPersons <= placesHurgada;
//
//
//
// if (isValidNum) {
//   if (numHurgada) {
//     if (numTaba) {
//       let confirmTaba = confirm ('Есть места в группе Taba?');
//       if (confirmTaba) {
//         placesTaba = placesTaba - enterPersons;
//         alert ('Приятного путешествия в группе Taba!');
//       } else {
//         alert ('Нам очень жаль, приходите еще!');
//       }
//
//   } else if (numSharm) {
//     let confirmSharm = confirm ('Есть места в группе Sharm?');
//     if (confirmSharm) {
//       placesSharm = placesSharm - enterPersons;
//       alert ('Приятного путешествия в группе Sharm!');
//     } else {
//       alert ('Нам очень жаль, приходите еще!');
//     }
//   }
//   else if (numHurgada) {
//     let confirmHurgada = confirm ('Есть места в группе Hurgada?');
//     if (confirmHurgada) {
//       placesHurgada = placesHurgada - enterPersons;
//       alert ('Приятного путешествия в группе Hurgada!');
//   } else {
//     alert ('Нам очень жаль, приходите еще!');
//   }
// }
//   }
//   else {
//     alert ('Извините, мест нет.');
//   }
// } else {
//   alert( 'Ошибка ввода' );
// }
// console.log(placesTaba);
// console.log(placesSharm);
// console.log(placesHurgada);


//
// let goods = [1,2,3,4,5,6,7,8];
// let n = goods.length;
// console.log(n);
// // console.log(isNaN(n));
// alert( goods.push());
// console.log(goods);


// let mat =[];
// for (let i = 0; i<3; i++) {
//   let smallArr =[];
//   for (let j = 1; j < 4; j++ ) {
//     smallArr.push(i);
//   }
//   mat.push(smallArr);
//
// }
//
// console.log(mat);



// __________________________________________________________
// ввести в массив бесконеч число инфор:

// let answer = [];
//
// for (let i =1; i < Infinity; i++ ) {
//   let quest = prompt('what you want?');
//   if (quest === null) {
//     break;
//   }
//   answer.push(`${i}) ${quest}`);
// }
//
// console.log(answer);

// __________________________________________________________
//
//  Приобразование строики в массив и разбитие массива на єлементы

// let string = prompt('string','');
// let arr = string.split('');
// console.log(arr);
//
// for(let i = 0; i < arr.length; i += 1) {
//   console.log(i);
// }


  // На каждой итерации мы будем проверять совпадает ли
  // элемент массива с именем клиента.
  // Если совпадает то мы записываем в resultMsg сообщение
  // об успехе и делаем break чтобы не искать дальше

  const iterable = ['j','a','v','a'];

  for (const value of iterable) {
    console.log(value);
  }
  // сообщeние об отсутсвии имени


// __________________________________________________________________________________________________


// const number = 10;
//
// for(let i = 0; i < number; i += 1) {
//   console.log(i);
// }
// ____________________________________________________________________________
