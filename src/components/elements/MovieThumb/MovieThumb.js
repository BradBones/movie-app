import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

// Stateless component
const MovieThumb = (props) => {
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ? 
            <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
                <img src={props.image} alt="movie thumb nail" />
            </Link>
            :
            <img src={props.image} alt="movie thumb nail" />
            }
        </div>
    )
}

export default MovieThumb;