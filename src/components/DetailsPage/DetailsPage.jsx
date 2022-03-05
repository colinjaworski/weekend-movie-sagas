import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'


function DetailsPage() {
    const history = useHistory();

    function backButton() {
        console.log('button clicked');
        history.push('/')
    };
    // const dispatch = useDispatch();
    const movie = useSelector(store => store.movie);

    // useEffect(() => {
    //     dispatch({ type: '' });
    // }, []);

    return (
        <main>
            <h1>MovieDetails</h1>
            <section className="movieDetails">
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title}
                    onClick={() => backButton()}/>
                     <h5>{movie.description}</h5>
                    <br/>
                <button
                    onClick={backButton}
                >Back to Movie List</button>
            </section>
        </main>

    );
}

export default DetailsPage;