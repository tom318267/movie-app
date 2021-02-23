import React from "react";
import { Link } from "react-router-dom";
import "./ResultItem.scss";

const ResultItem = ({ title, poster, info, imdbID }) => {
  return (
    <div className="ResultItem">
      <h1>{title}</h1>
      <Link to={`/${imdbID}`}>
        <img className="hvr-grow" src={poster} alt="" />
      </Link>

      <h3>{info}</h3>
    </div>
  );
};

export default ResultItem;
