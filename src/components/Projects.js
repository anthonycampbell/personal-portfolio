import React, { Component } from 'react';
import { Motion, spring, StaggeredMotion } from 'react-motion';
import FlipCard from './FlipCard';

export default class Projects extends Component{

    render(){
        return(
            <div className="projects">
                <FlipCard frontColor={'rgb(0, 191, 255)'}
                          backColor={ 'rgb(221, 254, 89)'}
                          frontContent={ "Vancouver Art Map" }
                          backContent={ 'vancouverArtMapPhoto.png' } />
                <FlipCard frontColor={ 'rgb(50, 205, 50)'}
                          backColor={ 'rgb(219, 112, 147)'}
                          frontContent={ 'Musqueam Survivor Pool' }
                          backContent={ 'vancouverArtMapPhoto.png' } />
                <FlipCard frontColor={'rgb(255,127,80)'}
                          backColor={ 'rgb(128,0,128)'}
                          frontContent={ 'Something else' }
                          backContent={ 'vancouverArtMapPhoto.png' } />
            </div>
        );
    }
}