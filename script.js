"use strict";
// Интерполяция
// const category = "toys";
// const forBoys = "boys";
// для подобного вывода необходимо использовать косые ковычки
// console.log(`https://somesite.com/${category}/${forBoys}/21`); // https://somesite.com/toys/boys/21

// --------------- Start ---------------
// let num = 21;
// while (num <= 25) {
//   console.log(num);
//   num++;
// }

// let num2 = 21;
// do {
//   console.log(num2);
//   num2++;
// }
// while (num2 <= 25);

// let num3 = 13;
// for (let i = 1; i < 10; i++) {
//   if (i == 7) {
//     break; // оборвет цикл на 7
//   } 
//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   if (i == 7) {
//     continue; // пропустит 7
//   } 
//   console.log(i);
// }

// --------------- Start ---------------
// let num = 21;
// switch (num) {
//   case 12:
//     console.log('no');
//     break;
//   case 21:
//     console.log('ok');
//     break;
//   case 1:
//     console.log('less');
//     break;
//   default:
//     console.log('default');
//     break;
// }

// --------------- Start ---------------

// может быть вызвана до своего объявления
// function declaration(a, b) {
//   return a + b;
// }
// console.log(declaration(7, 9));

// не может быть вызвана до своего объявления
// let expration = function(c, d) {
//   return c - d;
// };
// console.log(expration(67, 6));

// не может быть вызвана до своего объявления
// let arrowFoo = (d, e) => {return d * e;};
// console.log(arrowFoo(7, 7));

// --------------- Start ---------------

//  let options = {
//    name: 'Your name',
//    age: 'Your age',
//    gender: 'Your gender',
//    isMarried: null,
//    family: {
//      father: 'Your father`s name',
//      mother: 'Your mother`s name'
//    },
//    makeTest: function(){
//      console.log('Some Test Log...');
//    }
//  };
//  options.makeTest();

//  console.log(Object.keys(options));

// let {father, mother} = options.family; // Деструктуризация
// console.log(father);

// for (let key in options) {
//   if (typeof(options.family) == 'string') {
//     for (let i in options.key) {
//       console.log(`Свойство ${i} имеет значение ${options.key[i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   }
// }

// --------------- Start ---------------

// let arr = [4, 3, 6, 2, 41, 4, 0, 9, 32];
// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a, b) {
//   return a - b;
// }
//arr.pop();
//arr.push(12);
//arr[99] = 7;
//console.log(arr.length);

// arr.forEach(function(item, i, arr){
//   console.log(`Index ${i}: value - ${item} in array ${arr}`);
// });

// let arr2 = prompt("Введите данные через запятую с пробелом", "");
// let userData =arr2.split(', ');

// console.log(userData.sort());
// console.log(userData.join('; '));

// --------------- Start ---------------
