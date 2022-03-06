import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function detailsPage(movie) { // function dispatches selected movie and information to movie reducer
        console.log('Movie data', movie)
        dispatch({
            type: 'SELECTED_MOVIE',
            payload: movie
        })

        history.push('/DetailsPage')
    }

    return (
        <main>
            {/* <h1 className="title">MovieList</h1> */}
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="movieCard" key={movie.id} >
                            <h3 className ="movieTitle">{movie.title}</h3>
                            <img className="poster" src={movie.poster} alt={movie.title} // when movie is clicked, run detailsPage function
                                onClick={() => detailsPage(movie)}
                                

                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;