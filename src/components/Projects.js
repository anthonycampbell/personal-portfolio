import React, { Component } from 'react';
import FlipCard from './FlipCard';

export default class Projects extends Component{
    render(){
        return(
            <div className="projects">
                <h3>Hover over card for link to project</h3>
                <FlipCard frontColor={ 'rgb(50, 205, 50)'}
                          backColor={ 'rgb(219, 112, 147)'}
                          frontContent={ <div>
                                            <h3>Joy</h3>
                                            <ul>
                                                <li>Web application</li>
                                                <li>MERN stack</li>
                                                <li>Capabilities 
                                                    <ul>
                                                        <li>User login</li>
                                                        <li>Add friends</li>
                                                        <li>Chat with friends</li>
                                                        <li>Create study guides (collection of tables)</li>
                                                        <li>Real time study guide collaboration</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                         </div>}
                          backContent={ 'joyPhoto.png' }
                          backURL={"http://ec2-13-59-183-57.us-east-2.compute.amazonaws.com/"} />
                <FlipCard frontColor={'rgb(0, 191, 255)'}
                          backColor={ 'rgb(221, 254, 89)'}
                          frontContent={ <div>
                                            <h3>Vancouver Art Map</h3>
                                            <ul>
                                                <li>Django webapp</li>
                                                <li>Plots art in Vancouver from parsed file downloaded from city website</li>
                                                <li>Google Maps api</li>
                                                <li>Capabilities
                                                    <ul>
                                                        <li>User Login</li>
                                                        <li>Favourite art pieces</li>
                                                        <li>Upload profile picture</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                         </div>}
                          backContent={ 'vancouverArtMapPhoto.png' }
                          backURL={"http://anthonyc.pythonanywhere.com/art_map/"} />
                <FlipCard frontColor={'rgb(255,127,80)'}
                          backColor={ 'rgb(111,51,155)'}
                          frontContent={ <div>
                                            <h3>Holiday Countdown</h3>
                                            <ul>
                                                <li>
                                                    Simple react app that displays the amount of time left until different holidays. New holidays are somewhat easy to add to codebase.
                                                </li>
                                            </ul>
                                         </div> }
                          backContent={ 'holidayCountdownPhoto.png' }
                          backURL={"https://anthonycampbell.github.io/holiday-countdowns/"} />
            </div>
        );
    }
}