import React from 'react';
let imageUrl = 'https://image.tmdb.org/t/p/w1280/';



const MoviePage = ({movie}) => {
    return (
        <div className="moviePage">
            <div className="">
                <img src={`${imageUrl}${movie.poster_path}`} />
            </div>
            <div className="moviePageRight">
                <div className="title">
                    <p><strong>{movie.title || movie.name}</strong></p>
                    <span >vote {movie.vote_average}</span>
                </div>
                <p className="overview"><strong>Overview: </strong></p>
                <p className="movieDescription">
                    {movie.overview}
                </p>
            </div>
        </div>
    );
};


export default MoviePage;