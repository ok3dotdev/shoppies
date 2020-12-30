import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  nominations: localStorage.getItem("nominations")
    ? JSON.parse(localStorage.getItem("nominations"))
    : new Array(5),
};

//creating context

export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("nominations", JSON.stringify(state.nominations));
    localStorage.setItem("nominated", JSON.stringify(state.nominated));
  }, [state]);

  //actions
  const addMovieToNominations = (result) => {
    dispatch({ type: "ADD_MOVIE_TO_NOMINATIONS", payload: result });
  };

  return (
    <GlobalContext.Provider
      value={{
        nominations: state.nominations,

        addMovieToNominations,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
