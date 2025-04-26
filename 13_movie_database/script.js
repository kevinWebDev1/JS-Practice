//✅ 1. Create an Array called movies
const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  {
    title: "12 Angry Men",
    director: "Sidney Lumet",
    year: 1957,
    rating: 9.0,
  },
];

//✅ 2. Functions to Create: 
// addMovie(movie) → Adds a new movie to the array.
// findMovie(title) → Find and return movie by title.
// listMovies() → Print all movies with details.

const addMovie = (movie) => movies.push(movie);

const findMovie = (title) => movies.find((movie) => movie.title === title);

const listMovies = () => movies.forEach((movie, i) => console.log(`${i+1}. ${movie.title} directed by ${movie.director} (${movie.year}) - Rating: ${movie.rating}`);
);

//✅ 3. create function : getTopRatedMovies(minRated)
    const getTopRatedMovies = (minRated) => movies.filter((movie) => movie.rating >= minRated);

//✅ 4. - Add 3 movies
// - List all movies
// - Find a specific movie
// - List top rated movies above 8.5

addMovie({
    title: "The Dark Knight Rises",
    director: "Christopher Nolan",
    year: 2012,
    rating: 8.4
});

addMovie({
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6
});

addMovie({
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    rating: 8.6
});
console.log(movies)

console.log("Movie Found: ",findMovie("Inception"));

listMovies();

console.log("Top Rated Movies: ",getTopRatedMovies(9))
