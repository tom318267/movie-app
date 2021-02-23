import React, { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Results from "../Results/Results";
import axios from "axios";
import "./LandingPage.scss";

const LandingPage = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const styles = {
    popcorn: {
      width: "500px",
    },
  };

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=b9fd14eb&s=${term}`
      );
      setResults(res.data);
      console.log(results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="LandingPage">
      <div className="head-container">
        <Player
          style={styles.popcorn}
          className="popcorn"
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_cnkfzsxq.json"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <h1>Fetch the Popcorn</h1>
        <h3>Review you favorite movies!</h3>
        <form className="search-input" onSubmit={(e) => fetchData(e)}>
          <i onClick={fetchData} className="fas fa-search"></i>
          <input
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="Search movie"
            value={term}
          />
        </form>
      </div>

      {!results ? (
        <h1 className="no-results">No results...</h1>
      ) : (
        <Results className="Results" results={results.Search} />
      )}
    </div>
  );
};

export default LandingPage;
