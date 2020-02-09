// Udemy home task 
var money = prompt('Your monthly budget is?', '');
var data = prompt('Enter date in YYYY-MM-DD format.', '');
var days = 30;
var oneDayBudget = (money - answer2) / days;

var appData = {
  'budget': 'money',
  'timeData': 'data',
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: false
};

var answer1 = prompt('Enter must-have expenses this month.', '');
var answer2 = parseInt(prompt('How much it will cost?', ''));

appData.expenses.a = answer1;
appData.expenses.b = answer2;
  
console.log(appData.expenses);
alert(parseInt(oneDayBudget));
