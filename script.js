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
function detectDayBudget() {

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
      
      function detectLevel () {
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 20) {
          appData.expenses[a] = b;
        }
      }
      detectLevel();
    }
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
  chooseExpenses();

  appData.moneyPerDay = (appData.budget / 30).toFixed(1);
  alert('Ежедневный бюджет: ' + appData.moneyPerDay);

  function chooseOptExpenses() {
    for (let y = 0; y < 3; y++) {
       let c = prompt('введите номер ' + (y + 1), '');
       let d = prompt('введите сумму расходов', '');
       appData.optionalExpenses[c] = d;
    }
  }
  chooseOptExpenses();
  
  function checkSavings() {
    if (appData.savings == true) {
      let save = +prompt('какая сумма накоплений', '');
      let percent = +prompt('под какой процент?', '');

      appData.monthIncome = save/100/12*percent;
      alert('Месячный доход с депозита: ' + appData.monthIncome);
    }
  }
  checkSavings(); 
}
detectDayBudget();
