//import default React library
import React from "react";

const MovieCard = ({ movie, watchList, addMovie, removeMovie }) => {
  // inWatchlist variable is to check if the current movie is in the watchlist using movie id and list filter
  const inWatchlist = watchList.filter((item) => {
    // "For each item in the list provided, if the item.id is triple equal to the movie.id, return the item"
    return item.id === movie.id;
  });

  // button variable to check if the length of inWatchlist is zero using ternary conditional operator.
  // A ternary operator takes 3 things: a condition followed by a question mark (?), an expression to execute if the condition is truthy, then a semicolon (:), then the expression to execute if the condition is falsy. This is similar to an if-else statement

  const button =
    inWatchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="movie-poster"
        />
        <h3>{movie.original_title}</h3>
        <h4>Release Date : {movie.release_date}</h4>
        <h4>Score: {movie.vote_average}</h4>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
