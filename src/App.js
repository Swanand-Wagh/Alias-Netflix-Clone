import React from "react";
import MovieRow from "./components/MovieRow";
import requests from "./requests";

const App = () => {
  return (
    <>
      <div className="App">
        <MovieRow
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
        <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
        <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <MovieRow title="Comdey Movies" fetchUrl={requests.fetchComedyMovies} />
        <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <MovieRow
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
      </div>
    </>
  );
};

export default App;
