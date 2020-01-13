import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = props => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=b5236c5c&i=${id}`)
      .then(resposne => resposne.json())
      .then(jsonResponse => {
        setMovie(jsonResponse);
      });
  });

  return (
    <div className="detail">
      <h2>{movie.Title}</h2>
      <div>
        <img width="400" src={movie.Poster} alt="poster" />
      </div>
      <p>{movie.Plot}</p>
    </div>
  );
};

export default Detail;
