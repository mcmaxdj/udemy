// Udemy home task 
let money, data;
let appData = {
  budget: money,
  timeData: data,
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function start() {
  money = +prompt('Your monthly budget is?', '');
  data = prompt('Enter date in YYYY-MM-DD format.', '');

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt('Your monthly budget is?', '');
  }
}
start();

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Enter must-have expenses this month.', '');
    let b = +prompt('How much it will cost?', '');
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 20) {
      appData.expenses[a] = b;
    } else {
      i--;
    }
  };
}
chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(1);
  alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' uah.');
} 
detectDayBudget();

function detectLevel () {
  if (appData.moneyPerDay < 500) {
    console.log('Small');
  } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
    console.log('middle');
  } else if (appData.moneyPerDay > 1000) {
    console.log('hight');
  } else {
    console.log('error');
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('какая сумма накоплений', '');
    let percent = +prompt('под какой процент?', '');

    appData.monthIncome = save/100/12*percent;
    alert('Месячный доход с депозита: ' + appData.monthIncome);
  }
}
checkSavings(); 
 
function chooseOptExpenses() {
  for (let y = 1; y <= 3; y++) {
     let optionalExpensesAnswer = prompt('введите статью необязательных расходов', '');
     appData.optionalExpenses[y] = optionalExpensesAnswer;
     console.log(appData.optionalExpenses);
  }
}
chooseOptExpenses();
    

  

  

  
  
  

