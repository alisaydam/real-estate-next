import React, { useState, useReducer, createContext } from "react";

const moviesList = [
  { title: "Matix", price: 148 },
  { title: "Matix", price: 148 },
  { title: "Matix", price: 148 },
];
const bookedMovieList = [
  { title: "Matix", price: 148 },
  { title: "Matix", price: 148 },
  { title: "Matix", price: 148 },
];

function bookedMoviesReducer(state, action) {
  const { movie, type } = action;
  if (type === "add") return [...state, movie];

  return state;
}

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(moviesList);
  const [bookedMovies, setBookedMovies] = useReducer(
    bookedMoviesReducer,
    bookedMovieList
  );

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        bookedMovies,
        setBookedMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
