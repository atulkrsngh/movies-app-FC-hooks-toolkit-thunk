import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import moviesReducer from '../src/reducers/moviesSlice';
import searchReducer from '../src/reducers/searchSlice';
import './index.css';

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('ACTION', action);
  next(action);
};

// getDefaultMiddleWare Returns an array containing the default list of middleware.
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);