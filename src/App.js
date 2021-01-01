import Header from "./components/Header";
import Results from "./components/Results";
import Nominations from "./components/Nominations";

import { GlobalProvider } from "./context/GlobalState";

import { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    query: "",
    results: [],
  });


  const apiurl = "https://www.omdbapi.com/?apikey=c00d1dfe";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.query).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;

    setState((prevState) => {
      return { ...prevState, query: query };
    });
  };
  return (
    <GlobalProvider>
      <div className="App">
        <Header handleInput={handleInput} search={search} />
        <main className="main">
          <Results results={state.results} />
          <Nominations />

        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
