import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function DetailsPage() {

    // const dispatch = useDispatch();
    // const movies = useSelector(store => store.movies);

    // useEffect(() => {
    //     dispatch({ type: '' });
    // }, []);

    return (
        <main>
            <h1>MovieDetails</h1>
            {/* <section className="movieDetails">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section> */}
        </main>

    );
}

export default DetailsPage;