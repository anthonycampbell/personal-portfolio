import React, { Component } from 'react';
import FlipCard from './FlipCard';

export default class Projects extends Component{
    render(){
        return(
            <div className="projects">
                <FlipCard frontColor={'rgb(0, 191, 255)'}
                          backColor={ 'rgb(221, 254, 89)'}
                          frontContent={ <h3>Vancouver Art Map</h3>}
                          backContent={ 'vancouverArtMapPhoto.png' } />
                <FlipCard frontColor={ 'rgb(50, 205, 50)'}
                          backColor={ 'rgb(219, 112, 147)'}
                          frontContent={ <h3>Musqueam Survivor Pool</h3> }
                          backContent={ 'vancouverArtMapPhoto.png' } />
                <FlipCard frontColor={'rgb(255,127,80)'}
                          backColor={ 'rgb(111,51,155)'}
                          frontContent={ <h3>Something else</h3> }
                          backContent={ 'vancouverArtMapPhoto.png' } />
            </div>
        );
    }
}