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
let appData = {
  optionalExpenses: {}
};
function chooseOptExpenses() {
  for (let y = 0; y < 3; y++) {
     let c = prompt('введите номер ' + (y + 1), '');
     let d = prompt('введите сумму расходов', '');
     appData.optionalExpenses[c] = d;
  }
}
chooseOptExpenses();