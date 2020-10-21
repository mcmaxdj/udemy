"use strict";

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

let numbersOfFilm;

function start() {
  numbersOfFilm = +prompt('How mane movies did you watch?', "");

  while (numbersOfFilm == '' || numbersOfFilm == null || isNaN(numbersOfFilm)) {
    numbersOfFilm = +prompt('How mane movies did you watch?', "");
  }
}
start();

let personalMoviesDB = {
  count: numbersOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("One of the last viewed movies?", ""),
        b = prompt("How do you rate it?", "");
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMoviesDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log('You watched less movies!');
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('You are classic mivies watcher!');
  } else if (personalMoviesDB.count >= 30) {
    console.log('You are Kinoman!!!');
  } else {
    console.log ('Something Went Wrong!');
  }
}
detectPersonalLevel();

function showMyDB() {
  if (personalMoviesDB.privat == false) {
    console.log(personalMoviesDB);
  }
}
showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Your favorite type of genres is number ${i}`);
    personalMoviesDB.genres[i - 1] = genre;
  }
}
writeYourGenres();