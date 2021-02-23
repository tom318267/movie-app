import React, { useEffect, useState } from "react";
import popcornPic from "../../assets/popcornPic.png";
import "./ResultInfo.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const ResultInfo = ({ match }) => {
  const [movieInfo, setMovieInfo] = useState([]);
  const id = match.params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=b9fd14eb&i=${id}&plot=full`
      );
      setMovieInfo(res.data);
    };
    fetchData();
  }, []);

  return !movieInfo ? (
    <h1>No info on this movie...</h1>
  ) : (
    <div className="ResultInfo">
      <div className="info-header">
        <Link to="/">
          <img style={{ width: "100px" }} src={popcornPic} alt="popcorn" />
          <h2>Fetch the Popcorn</h2>
        </Link>
      </div>
      <div className="info-container">
        <h1>{movieInfo.Title}</h1>
        <div className="image-info">
          <img src={movieInfo.Poster} alt="moviePic" />
          <h4>{movieInfo.Plot}</h4>
        </div>
      </div>
    </div>
  );
};

export default ResultInfo;
