import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
    const emptyMessage = (
        <p>There are no movies yet.</p>
    );

    const moviesList = (
        <div>
        </div>
    );

    return (
        <div>
            { movies ? emptyMessage : moviesList }
        </div>
    );
};

/*MoviesList.propTypes = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired
    }).isRequired
};*/

export default MoviesList;