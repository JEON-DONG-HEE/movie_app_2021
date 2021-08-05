import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({year, title, summary, poster, genres}) {
    return (
    <div className="movie_item">
        <img src={poster} alt={title} title={title} />
        <div className="info">
            <h4 className="title">{title}</h4>
            <span className="year">{year}</span>
            <ul className="list_genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genre">{genre}</li> 
                ))}
            </ul>
            <p className="summary">{summary.slice(0, 220)}...</p>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;