import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
    const emptyMessage = (
      <p> There are no movies yet. </p>
    );

    const moviesList = (
        <div>
            movies List
        </div>
    );
    console.log(movies)

    return (
        <div>
            { movies ? moviesList : emptyMessage }
        </div>
    );


};
MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MoviesList;