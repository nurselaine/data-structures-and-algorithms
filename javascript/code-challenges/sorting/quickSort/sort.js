'use strict';

const movies = require('./movies');

// write your own comparator function for each function and export THOSE 
// separately for testing as well. You will also use comparators in the 
// three pre-written functions bellow 

// examples for demo
const books = ['A Tale of Two Cities', 'Mary Poppins', 'Lord of the Rings'];
const standings = [
  {team: 'Lions', score: 4},
  {team: 'Tigers', score: 1},
  {team: 'Bears', score: 5},
  {team: 'OhMy...', score: 3},
];

//Demo:  stay tuned...




// Complete for Code Challenge 28
function sortYear(movies) {

  const yearComparator = (a, b) => {
    if(a.year < b.year){
      return -1
    }

    if(a.year > b.year){
      return 1;
    }

    return 0;
  };

  movies = movies.sort(yearComparator);

  return movies;
}
// console.log(sortYear(movies));

function sortTitle(movies) {

  const movieComparator = (a, b) => {
    let movieA = a.title.replace('The ', '');
    let movieB = b.title.replace('The ', '');
  
    if(movieA < movieB){
      return -1;
    }
  
    if(movieA > movieB){
      return 1;
    }
  
    return 0;
  }
  movies = movies.sort(movieComparator);
  return movies;
}
// console.log(sortTitle(movies));

function inGenre(movies, genre) {

  movies = movies.filter(movie => movie.genres.includes(genre));

  return movies;
}
// console.log(inGenre(movies, 'Adventure'))

module.exports = { sortYear, sortTitle, inGenre }