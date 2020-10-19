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

// --------------- Start practic ---------------

let numbersOfFilm = +prompt('How mane movies did you watch?', "");
let personalMoviesDB = {
  count: numbersOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("One of the last viewed movies?", ""),
      b = prompt("How do you rate it?", "");

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMoviesDB.movies[a] = b;
    console.log('Done!')
  } else {
    console.log('error');
    i--;
  }
}

if (personalMoviesDB.count < 10) {
  console.log('You watched less movies!');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
  console.log('You are classic mivies watcher!');
} else if (personalMoviesDB.count >= 30) {
  console.log('You are Kinoman!!!');
} else {
  console.log ('Something Went Wrong!');
}

console.log(personalMoviesDB);



