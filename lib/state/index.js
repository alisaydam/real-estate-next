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

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [movies, setMovies] = useState(moviesList);
  const [theme, setTheme] = useState("dark");
  const [bookedMovies, setBookedMovies] = useReducer(
    bookedMoviesReducer,
    bookedMovieList
  );

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        movies,
        setMovies,
        bookedMovies,
        setBookedMovies,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
