import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../reducers/moviesSlice';

function MovieCard(props) {
  const dispatch = useDispatch();

  const handleFavouriteClick = () => {
    const { movie } = props;
    dispatch(addToFavourites(movie));
  };

  const handleUnFavouriteClick = () => {
    const { movie } = props;
    dispatch(removeFromFavourites(movie));
  };

  const { movie, isFavourite } = props;

  return (
    <div className="movie-card">
      <div className="left">
        <img src={movie.Poster} alt="movie-pic" />
      </div>
      <div className="right">
        <div className="title">
          {movie.Title} ({movie.Year})
        </div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <div className="rating">{movie.imdbRating}</div>
          {isFavourite ? (
            <button
              className="unfavourite-btn"
              onClick={handleUnFavouriteClick}
            >
              Unfavourite
            </button>
          ) : (
            <button className="favourite-btn" onClick={handleFavouriteClick}>
              Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;