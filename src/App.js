//import styling
import "./App.css";

//import default React library
import React from "react";
//import useState & useEffect hooks specifically, so we need to destructure them in objects:
import { useEffect, useState } from "react";
//import axios
import axios from "axios";

//import components
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  //create 2 pieces of state for MovieList, Watchlist, and Page (initialize at 1)
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  // addMovie function uses setWatchList to create a copy of the Watchlist, and add the movie to the list.
  const addMovie = (movie) => setWatchList([...watchList, movie]);

  //removeMovie function takes in "movie" as parameter to remove
  const removeMovie = (movie) => {
    // callback function inside of filter() to return the items in the array that are not the movie parameter (which is removed)
    const newState = watchList.filter((item) => {
      return item !== movie;
    });
    setWatchList(newState);
  };

  //getData function that makes an axios call to the IMDB API, save the movies results to movieList
  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&language=en&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  //call the useEffect function to access the movie API and pass the info down to a component for display. This will run it on first render and every time the page updates.
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      <main>
        <MovieScreen
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          watchList={watchList}
          removeMovie={removeMovie}
        />
        <Watchlist watchList={watchList} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
