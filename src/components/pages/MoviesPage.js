import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchMovies,
    deleteMovies
} from '../../actions/movies';
import MoviesList from '../MoviesList';

class MoviesPage extends Component {
    static propTypes = {
      movies: PropTypes.object.isRequired,
      deleteMovies: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div>
                <h2>Movies</h2>
                <MoviesList
                    deleteMovie = {this.props.deleteMovies}
                    movies={this.props.movies} />
            </div>
        );
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
};

const mapDispatchToProps = {
    fetchMovies,
    deleteMovies
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);