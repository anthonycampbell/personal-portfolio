import React, { Component } from 'react';
import './App.css';
//import appWrapper from './components/AppWrapper.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Slides from './components/Slides';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';

const WrappedSlides = Slides(Resume, Home, Projects);

class App extends Component {
    state = {
        index: 0,
    };

    handleChange = (event, value) => {
        var v = 0;
        if (event.target.id === 'resume'){
            v = 0;
        } else if (event.target.id === 'home'){
            v = 1
        } else {
            v = 2;
        }
        this.setState({
            index: v,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        return (
            <>
                <div id="content-wrapper">
                    <Header state={ this.state } handleChange={ this.handleChange }/>
                    <WrappedSlides state={ this.state } handleChangeIndex={ this.handleChangeIndex } />
                </div>
                <Footer />
            </>
        );
    }
}

//const WrappedApp = appWrapper(App);

export default App;
