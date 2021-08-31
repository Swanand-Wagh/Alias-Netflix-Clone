import React, { useState, useEffect } from "react";
import axios from "../axios.js"; //here axios is "instance" from axios.js, since its a default export, we can name it anything
import "./MovieRow.css";

const MovieRow = ({ title, fetchUrl, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      //   console.log(req);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);
  //   console.log(movies);

  return (
    <>
      <div className="movieRow">
        <h2>{title}</h2>
        <div className="movieRow_posters">
          {movies.map((mov) => {
            return (
              <img
                key={mov.id}
                src={`${base_url}${
                  isLargeRow ? mov.poster_path : mov.backdrop_path
                }`}
                alt={mov.name}
                className={`single_poster ${isLargeRow && "large_poster"}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieRow;
