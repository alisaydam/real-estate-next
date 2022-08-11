// ./components/Movies.js

// import the useContext Hook
import React, { useContext } from "react";
// import the Context
import { MovieContext } from "../../lib/state";

export default function Movies() {
  const { movies, setMovies, bookedMovies, setBookedMovies } =
    useContext(MovieContext);
  // function to add items and price
  const moviee = [{ title: "Riddick", price: 5 }];
  const add = (movie) => {
    // pass an object containing the movie and type of action, "add"
    setBookedMovies({ movie, type: "add" });
  };

  // function to remove items and price
  const remove = (movie) => {
    setBookedMovies({ movie, type: "remove" });
  };

  return (
    <ul className="movies">
      {bookedMovies.map((movie) => {
        return (
          <li className="movie" key={movie.name}>
            <header>
              <h3> {movie.title} </h3>
              <p> ${movie.price} </p>
            </header>

            <button onClick={() => add(movie)}> Add </button>
            <button onClick={() => remove(movie)}> Remove </button>
          </li>
        );
      })}
      <li>Movies: {JSON.stringify(movies)}</li>
      <button onClick={() => setMovies(moviee)}> Set movies </button>
    </ul>
  );
}
