import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../reducers/moviesSlice';
import { data as moviesList } from '../data';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(addMovies(moviesList));
  }, []);

  const isMovieInFavourites = (movie) => {
    const index = movies.favourites.indexOf(movie);
    return index !== -1;
  };

  const changeTab = (val) => {
    dispatch(setShowFavourites(val));
  };

  const { list, showFavourites = [], favourites = [] } = movies;
  const displayMovies = showFavourites ? favourites : list;

  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${showFavourites ? '' : 'active-tabs'}`}
            onClick={() => changeTab(false)}
          >
            Movies
          </div>
          <div
            className={`tab ${showFavourites ? 'active-tabs' : ''}`}
            onClick={() => changeTab(true)}
          >
            Favourites
          </div>
        </div>

        <div id="list">
          {displayMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.imdbID}
              isFavourite={isMovieInFavourites(movie)}
            />
          ))}
          {displayMovies.length === 0 && (
            <div className="no-movies">No movies to display!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;