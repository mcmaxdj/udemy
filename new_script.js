"use strict";
// Интерполяция
// const category = "toys";
// const forBoys = "boys";
// для подобного вывода необходимо использовать косые ковычки
// console.log(`https://somesite.com/${category}/${forBoys}/21`); // https://somesite.com/toys/boys/21

// Start practic
let numbersOfFilm = +prompt('How mane movies did you watch?', "");

let personalMoviesDB = {
  count: numbersOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let questionOne = prompt("One of the last viewed movies?", ""),
    questionTwo = prompt("How do you rate it?", "");

personalMoviesDB.movies[questionOne] = questionTwo;

console.log(personalMoviesDB);