import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <Container text>
                    <Route path='/movies' component={MoviesPage} exact></Route>
                    <Route path='/movies/new' component={NewMoviePage} exact></Route>
                </Container>

                <Footer/>
            </div>
        );
    }
}

export default App;