import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NewMovieForm from '../NewMovieForm';

class NewMoviePage extends Component {
    state = {
        
    };

    static defaultProps = {
        
    };

    static propTypes = {};

    render() {
        return (
            <div>
                <NewMovieForm/>
            </div>
        );
    }
}

NewMoviePage.propTypes = {};

export default NewMoviePage;