// let num = 50;
// if (num < 49) {
//   console.log('no');
// } else if (num > 100) {
//   console.log('more')
// } else {
//   console.log('yes - if/else');
// }

// (num == 50) ? console.log('yes - ternar') : console.log('no');

// switch (num) {
//   case num < 49:
//     console.log('no');
//     break;
//   case num > 100:
//     console.log('more');
//     break;
//   case num > 80:
//     console.log('still more');
//     break;
//   case 50:
//     console.log('yes - switch');
//     break;
//   default:
//     console.log('ooppps')
// }

// let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }

// let num = 20;
// function showFirstMessage(text) {
//   alert(text);
//   num = 10;
// }

// showFirstMessage("some text");
// console.log(num);

// function retVar() {
//   let num = 50;
//   return num;
// }
// let anotherNum = retVar();
// console.log(anotherNum);

// let i = 0;
// do {
//   i++;
//   let a = prompt('Enter must-have expenses this month.', '');
//   let b = +prompt('How much it will cost?', '');
//   if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && (typeof(a)) != '' && a.length < 20 ) {
//       appData.expenses[a] = b;
//     }
// }
// while (i < 2);

// let i = 0;
// while (i < 2) {
//   let a = prompt('Enter must-have expenses this month.', '');
//   let b = +prompt('How much it will cost?', '');
//   if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && (typeof(a)) != '' && a.length < 20 ) {
//       appData.expenses[a] = b;
//   }
//   i++;
// }
// let appData = {
//   optionalExpenses: {}
// };
// function chooseOptExpenses() {
//   for (let y = 0; y < 3; y++) {
//      let c = prompt('введите номер ' + (y + 1), '');
//      let d = prompt('введите сумму расходов', '');
//      appData.optionalExpenses[c] = d;
//   }
// }
// chooseOptExpenses();

// function first() {
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }
// function second() {
//   console.log(2);
// }
// first();
// second();

// function learnJs(lang, callback) {
//   console.log('I\'m learning ' + lang );
//   callback();
// }
// learnJs('JavaScript', function() {
//   console.log('I finished third lesson')
// });
// // or
// function learnJs(lang, callback) {
//   console.log('I\'m learning a ' + lang );
//   callback();
// }
// function done() {
//   console.log('I finished third lesson')
// }
// learnJs('JavaScript', done);

// let options = {
//   width: 1024,
//   height: 400,
//   name: 'test',
//   bool: false // options.bool = false
// };
// options.colors = {
//   border: '#e2a2c3',
//   bg: '#adc555'
// };
// delete options.bool;
// console.log(options);

// for(let key in options) {
//   console.log('Options ' + key + ' has a value ' + options[key]);
// }
// console.log(Object.keys(options).length);


// // 
// var arr = [3,2,1,4,5];
// arr.sort(function(a, b) {
//   return a - b;
// });
// console.log(arr);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');

// console.log(lydia);
// console.log(sarah);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, '2'));

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }
// const person = 'Lydia';
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

// const sum = eval('10*10+5');
// console.log(sum);

// var num = 8;
// var num = 10;
// console.log(num);

// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has('1'));
// console.log(set.has(1));


