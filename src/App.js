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

    handleChange = (e) => {
        var v = 0;
        if (e.target.id === 'resume'){
            v = 0;
            e.target.nextSibling.style.backgroundColor = 'rgb(255, 165, 0)';
            e.target.nextSibling.nextSibling.style.backgroundColor = 'rgb(255, 165, 0)';
        } else if (e.target.id === 'home'){
            v = 1;
            e.target.previousSibling.style.backgroundColor = 'rgb(255, 165, 0)';
            e.target.nextSibling.style.backgroundColor = 'rgb(255, 165, 0)';
        } else {
            v = 2;
            e.target.previousSibling.style.backgroundColor = 'rgb(255, 165, 0)';
            e.target.previousSibling.previousSibling.style.backgroundColor = 'rgb(255, 165, 0)';
        }
        this.setState({ index: v });
    };

    handleChangeIndex = index => {
        this.setState({ index });
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
