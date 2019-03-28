import React from 'react';

export const MovieButton = ({
    onClick, 
    movie
}) => {
    return (
        <button 
            className="movieButton"
            onClick={() => onClick(movie.link)}>
            {movie.type}
        </button>
    )
}
    


export const SelectMovieButton = ({
    onClick,
    movie
}) => {
    return (
        <h4 className="movieList"
            onClick={() => onClick(movie)}>
            {movie.title}
        </h4>
    )
}
