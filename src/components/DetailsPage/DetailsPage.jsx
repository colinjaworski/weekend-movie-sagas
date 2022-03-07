import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function DetailsPage() {
    const history = useHistory(); // allows user to move back to movieList page 
    const dispatch = useDispatch();



    useEffect(() => {// fetch_genres runs once on page load
        console.log('in details page useEffect')
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie
        });
    }, []);

    function backButton() {
        console.log('button clicked');
        history.push('/')
    };
    // sets variables = to cooresponding data held in store
    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres);
    console.log('genre is', genres[0])



    return(
        <main>


            <section className="movieDetails">
                <h3>{movie.title}</h3>
                <img className="detailsPoster" src={movie.poster} alt={movie.title} 
                    onClick={() => backButton()} /> 
                {/* <h3>Genres:</h3> */}
            </section>

            <section className="description">
                <h4>{movie.description}</h4>
                {genres.map((genre, id) => { //maps through genres to show each cooresponding genre for selected movie
                    return (

                        <div key={id} >
                            <h4>{genre.name}</h4>
                        </div>
                    );
                })}
                <button
                    onClick={backButton}
                >Back to Movie List</button>
            </section>

        </main >

    );
}

export default DetailsPage;