//import default React library
import React from "react";

//import MovieCard component because the MovieScreen section will show many movieCards
import MovieCard from "./MovieCard";

// MovieScreen is a component to display all the movies as movieCard components
// you can pass "props" in the component, but it is good practice to deconstruct the props you wanna use here.
const MovieScreen = ({
  addMovie,
  movieList,
  watchList,
  page,
  setPage,
  removeMovie,
}) => {
  //movieDisplay variable to show all the movies in movieList by original_title
  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        movie={movie}
        watchList={watchList}
        addMovie={addMovie}
        removeMovie={removeMovie}
        key = {index}
      />
    );
  });

  // //increment & decrement functions to go to the previous page or the next page
  // const increment = () => setPage(page + 1);
  // const decrement = () => setPage(page - 1);

  return (
    <div className="page">
      {/* <h3>Add a movie to your watchlist</h3> */}
      {/* <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div> */}
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
