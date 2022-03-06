import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'


function DetailsPage() {
    const history = useHistory();
    const dispatch = useDispatch();



    useEffect(() => {
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
    // const dispatch = useDispatch();
    const movie = useSelector(store => store.movie);
    const genres = useSelector(store => store.genres)
    console.log('genre is', genres[0])

    return (
        <main>
            <section className="description">
                <h4>{movie.description}</h4>
                {genres.map((genre, id) => {
                    return (

                        <div key={id} >
                            <h4>{genre.name}</h4>
                        </div>
                    );
                })}
                {/* <br /> */}



            </section>
            {/* <h1>MovieDetails</h1> */}
            <section className="movieDetails">
                <h3>{movie.title}</h3>
                <img className="poster" src={movie.poster} alt={movie.title}
                    onClick={() => backButton()} />
                {/* <h3>Genres:</h3> */}

            </section>

            <section>
                <button
                    onClick={backButton}
                >Back to Movie List</button>
            </section>
            
        </main>

    );
}

export default DetailsPage;