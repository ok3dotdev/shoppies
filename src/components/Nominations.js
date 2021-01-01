import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Nominations() {


  const { nominations, removeMovieFromNominations } = useContext(GlobalContext);
  if (nominations.length === 5) {
    alert('Thank you for you Nominations!');
  }



  return (
    <section className="results nominations">
      <h3>Nominations</h3>
      <ul>
        {nominations.map((nomination) => (
          <div key={nomination.imdbID} className="result results">
            <li className="result-title">{nomination.Title}</li>
            <button onClick={() => removeMovieFromNominations(nomination.imdbID)} className="btn">Remove</button>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default Nominations;
