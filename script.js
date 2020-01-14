// Udemy home task 
var money = prompt('Your monthly budget is?', '');
var data = prompt('Enter date in YYYY-MM-DD format.', '');
var days = 30;
var oneDayBudget = (money - question2) / days;

var appData = {
  'budget': 'money',
  'timeData': 'data',
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: false
};

var question1 = prompt('Enter must-have expenses this month.', '');
var question2 = prompt('How much it will cost?', '');

appData.expenses.a = question1;
appData.expenses.b = question2;

console.log(appData.expenses);
alert(oneDayBudget);
