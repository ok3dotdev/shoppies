import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  nominations: localStorage.getItem('nominations') ? JSON.parse(localStorage.getItem('nominations')) : [],
};

//creating context

export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("nominations", JSON.stringify(state.nominations));


  }, [state]);

  //actions
  const addMovieToNominations = (result) => {
    dispatch({ type: "ADD_MOVIE_TO_NOMINATIONS", payload: result });
  };

  const removeMovieFromNominations = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_NOMINATIONS", payload: id });
  };


  return (
    <GlobalContext.Provider
      value={{
        nominations: state.nominations,
        removeMovieFromNominations,

        addMovieToNominations,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
