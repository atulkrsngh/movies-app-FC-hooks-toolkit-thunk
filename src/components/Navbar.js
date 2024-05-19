import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToList, handleMovieSearch } from '../reducers/moviesSlice';

function Navbar() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const handleAddToMovies = (movie) => {
    dispatch(addMovieToList(movie));
  };

  const handleSearchClick = () => {
    dispatch(handleMovieSearch(searchText));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const { showSearchResults, results: movie } = search; // renaming results to movie

  return (
    <div className="nav">
      <div className="search-container">
        <input onChange={handleSearchChange} />
        <button id="search-btn" onClick={handleSearchClick}>
          Search
        </button>

        {showSearchResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={movie.Poster} alt="search-pic" />
              <div className="movie-info">
                <span>{movie.Title}</span>
                <button onClick={() => handleAddToMovies(movie)}>
                  Add to Movies
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;