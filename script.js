// Udemy home task 
let money = +prompt('Your monthly budget is?', '');
let data = prompt('Enter date in YYYY-MM-DD format.', '');

let appData = {
  budget: money,
  timeData: data,
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('Enter must-have expenses this month.', '');
  let b = +prompt('How much it will cost?', '');

  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 20) {
      appData.expenses[a] = b;
  }
};

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

appData.moneyPerDay = appData.budget / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 500) {
  console.log('Small');
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
  console.log('middle');
} else if (appData.moneyPerDay > 1000) {
  console.log('hight');
} else {
  console.log('error');
}
  