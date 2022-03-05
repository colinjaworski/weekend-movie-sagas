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
    // const movies = useSelector(store => store.movies);

    // useEffect(() => {
    //     dispatch({ type: '' });
    // }, []);

    return (
        <main>
            <h1>MovieDetails</h1>
            <section className="movieDetails">
                <button
                    onClick={backButton}
                >Back to Movie List</button>
            </section>
        </main>

    );
}

export default DetailsPage;