import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addSearchResult } from './searchSlice';

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialMoviesState,
  reducers: {
    addMovies(state, action) {
      state.list = action.payload;
    },
    addToFavourites(state, action) {
      state.favourites.unshift(action.payload);
    },
    setShowFavourites(state, action) {
      state.showFavourites = action.payload;
    },
    removeFromFavourites(state, action) {
      state.favourites = state.favourites.filter(
        (movie) => movie.Title !== action.payload.Title
      );
    },
    addMovieToList(state, action) {
      state.list.unshift(action.payload); // pushing at the beginning
    }
  }
});

export const handleMovieSearch = createAsyncThunk(
  'movies/handleMovieSearch',
  async (searchText, { dispatch }) => {
    const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    const response = await fetch(url);
    const movie = await response.json();
    dispatch(addSearchResult(movie));
  }
);

export const { addMovies, addToFavourites, setShowFavourites, removeFromFavourites, addMovieToList } = moviesSlice.actions;

export default moviesSlice.reducer;

/*
In Redux Toolkit, when you dispatch an action created using createSlice, Redux Toolkit automatically wraps the data you 
provide as an argument to the action creator in a payload property of the action object.
*/