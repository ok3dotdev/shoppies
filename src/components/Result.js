import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Result({ result }) {
  const { addMovieToNominations, nominations } = useContext(GlobalContext);

  let storedMovie = nominations.find((nomination) => nomination.imdbID === result.imdbID);

  const nominationsDisabled = storedMovie ? true : false;
  return (
    <ul className="results result">
      <li className="result-title">{result.Title} {''}<span>({result.Year})</span></li>
      <button
        className="btn"
        disabled={nominationsDisabled}
        onClick={() => addMovieToNominations(result)}
      >
        Nominate
      </button>
    </ul>
  );
}

export default Result;
