import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Nominations() {
  const { nominations } = useContext(GlobalContext);
  nominations.length = 5;
  return (
    <section className="results nominations">
      <h3>Nominations</h3>
      <ul>
        {nominations?.map((nomination) => (
          <div className="result results">
            <li className="result-title">{nomination.Title}</li>
            <button className="btn">Remove</button>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default Nominations;
