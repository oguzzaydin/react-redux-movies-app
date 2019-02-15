import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchMovies,
} from '../../actions/movies';
import MoviesList from '../MoviesList';

class MoviesPage extends Component {


    componentDidMount() {
        this.props.fetchMovies();
        console.log('ASDSADA',this.props)
    }

    render() {
        return (
            <div>
                <h2>Movies</h2>
                <MoviesList
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
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);