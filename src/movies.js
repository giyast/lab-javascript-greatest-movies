// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let directors = moviesArray.map((a) => a.director);
    let directorsList = [...new Set(directors)];
    return directorsList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDrama = moviesArray.filter((a) => 
    a.director === 'Steven Spielberg' && a.genre.includes('Drama'));
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let initial = 0;
    let scoreall = moviesArray.reduce((a, b) => a + b.score, initial);
    return (scoreall / moviesArray.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter((a) => a.genre.includes('Drama'));
  
    let dramaScoreall = dramaMovies.reduce((a, b) => a + b.score, 0);
    return (dramaScoreall / dramaMovies.length).toFixed(2);
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let mvTitle = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    let mvYear = mvTitle.sort((a, b) => a.year - b.year);
    return mvYear
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
        let byTitle = moviesArray.sort((str1, str2) => {
          return str1.title.localeCompare(str2.title);
        });
        return byTitle
      }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    moviesArray.forEach(el => {
        let hours = el.duration.substring(0, 2);
        if (hours.includes('h')){
          hours.replace('h', '');
          }
        hours = parseFloat(hours) * 60;
    
        let min = a.duration.substring(3).replace('min', '');
        min = parseFloat(min);
    
        el.duration = hours + min;
      });
      return moviesArray;
    }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
