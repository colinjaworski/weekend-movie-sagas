import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies); // these take commands from other parts of the app and run the cooresponding functions
    yield takeEvery('FETCH_GENRES', fetchGenres);
    
}
function* fetchGenres(action) {
    // get all genres from the DB
    console.log(action)
    try {
        const genres = yield axios.get(`/api/genre/${action.payload.id}`); //gets genres from DB 
        console.log('get all genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data }); // sends information to genres reducer to be set in the store

    } catch {
        console.log('get genres error');
    }
        
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie'); // gets movies and other data
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data }); // sends data recieved to movies reducer

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movie = (state = {}, action) => { // movie reducer runs when movie is selected from list page and sends information to store
    switch (action.type) {
        case 'SELECTED_MOVIE':
            return action.payload; 
        default:
            return state;
    }
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
