import React, { useEffect } from "react";
import ResultItem from "../ResultItem/ResultItem";
import film from "../../assets/film.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Results.scss";

const Results = ({ results }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return !results ? (
    <h1 className="searchFor">
      <img className="film" src={film} alt="film" />
      Search for a movie!
    </h1>
  ) : (
    <div className="Results">
      <h1 className="weFound">We found {results.length} results!</h1>
      <div data-aos="fade-up" className="results-container">
        {results.map((result) => {
          return (
            <ResultItem
              key={result.imdbID}
              title={result.Title}
              poster={result.Poster}
              info={result.Plot}
              imdbID={result.imdbID}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;
