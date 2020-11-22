"use strict";

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

let personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMoviesDB = +prompt('How many movies did you watch?', "");
    while (personalMoviesDB == '' || personalMoviesDB == null || isNaN(personalMoviesDB)) {
      personalMoviesDB = +prompt('How many movies did you watch?', "");
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("One of the last viewed movies?", ""),
          b = prompt("How do you rate it?", "");

      if  (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMoviesDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMoviesDB.count < 10) {
      console.log('You watched less movies!');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log('You are classic mivies watcher!');
    } else if (personalMoviesDB.console >= 30) {
      console.log('You are Kinoman!!!');
    } else {
      console.log ('Something Went Wrong!');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMoviesDB.privat) {
      personalMoviesDB.privat = false;
    } else {
      personalMoviesDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favorite type of genres is number ${i}`);
      while (genre == '' || genre == null) {
        genre = prompt(`Your favorite type of genres is number ${i}`);
      }
      personalMoviesDB.genres[i - 1] = genre;
    }
    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`); 
    });
  }

};
