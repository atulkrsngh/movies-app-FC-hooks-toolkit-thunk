import { createSlice } from '@reduxjs/toolkit';
import { addMovieToList } from './moviesSlice';

const initialSearchState = {
  results: {},
  showSearchResults: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    addSearchResult(state, action) {
      state.results = action.payload;
      state.showSearchResults = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addMovieToList, (state) => {
      state.showSearchResults = false;
    });
  },
});

export const { addSearchResult } = searchSlice.actions;

export default searchSlice.reducer;

// The extraReducers field in Redux Toolkit's createSlice is used to handle actions that are not defined within the slice itself, 
// often to handle actions from other slices or manually created actions.