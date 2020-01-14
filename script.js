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




// Blocks height 
// $(document).ready(function () {
//   var targetHeight = 0;
//   $('.block-height', this).each(function () {
//     if ($(this).height() > targetHeight) {
//       targetHeight = $(this).height();
//     }
//   });
//   $('.block-height', this).height(targetHeight);
// });

// // Fabric creation
// var getPrice = 45000;

// function Car(option) {
//   this.tyres = 4;
//   this.country = 'Germany';
//   return this;
// }

// function doublePrice () {
//   return getPrice * 2;
// }

// function getCarOptions() {
//   return 'This car from ' + this.country + ' with price = ' + doublePrice() + '.';
// }

//  var volvo = new Car();
//  console.log(volvo);
//  console.log(getCarOptions());

// function Plane(option) {
//   this.name = 'Boing';
// }

// function magecomFabric() {
//   magecomFabric.prototype.CarClass = Car;
//   magecomFabric.prototype.createCar = function(option) {

//     switch(options.CarType){
//       case "car":
//         this.CarClass = Car;
//         break;
//       case "truck":
//         this.PlaneClass = Plane;
//         break;
//     }
//     return new this.CarClass( options );
//   };
// }