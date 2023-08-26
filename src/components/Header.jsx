//import default React library
import React from "react";

//import MovieCard component because the MovieScreen section will show many movieCards
import MovieCard from "./MovieCard";

const Header = ({page, setPage}) => {
  //increment & decrement functions to go to the previous page or the next page
  const increment = () => setPage(page + 1);
  const decrement = () => setPage(page - 1);
  return (
    <header className="sticky">
      <h1>An's Movie App</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
    </header>
  );
};

export default Header;
