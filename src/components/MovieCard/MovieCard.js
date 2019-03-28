import React from 'react';
let imageUrl = 'https://image.tmdb.org/t/p/w1280/';

const MovieCard = ({data, getSelectedMovie}) => {
    return (
        <div className="mainDiv">
            <div className="img">
                <img src={`${imageUrl}${data.poster_path}`} />
            </div>
            <div className="description">
                <div className="title">
                    <p><strong>{data.title || data.name}</strong></p>
                    <span>vote {data.vote_average}</span>
                </div>
                <p className="movieDescription">
                    {data.overview}
                </p>
                <div className="moreInfo" onClick={() => getSelectedMovie(data)}>
                    More Info
                </div>
            </div>
        </div>
    );
};

export default MovieCard;