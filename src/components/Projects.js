import React, { Component } from 'react';
import { Motion, spring, StaggeredMotion } from 'react-motion';

export default class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {isMouseEnter: false, isMouseLeave: false};
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e){
        this.setState({isMouseEnter: true});
        this.setState({isMouseLeave: false});
    }

    handleMouseLeave(e){
        this.setState({isMouseLeave: true});
        this.setState({isMouseEnter: false});
    }

    render(){
        const {isMouseEnter, isMouseLeave} = this.state;
        return(
            <div className="projects">

                <StaggeredMotion
                    defaultStyles={[{a: 0}, {a: 270}]}
                    styles={prevInterpolatedStyles => {
                        if (isMouseEnter){
                            if (prevInterpolatedStyles[0].a > 89){
                                return [{a: 90}, {a: spring(360)}]
                            } else {
                                return [{a: spring(90)}, {a: 270}]
                            }
                        }

                        if (isMouseLeave){
                            if (prevInterpolatedStyles[1].a < 271){
                                return [{a: spring(0)}, {a: 270}];
                            }
                             else return [{a: 90}, {a: spring(270)}];
                        }

                        return (prevInterpolatedStyles);
                    }}>
                    {rotations =>
                        <div className="flipCard"
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}>
                            <div className="front" style={{ transform: `rotateY(${rotations[0].a}deg)`}}>
                                div1
                            </div>
                            <div className="back" style={{transform: `rotateY(${rotations[1].a}deg)`}}>
                                div2
                            </div>
                        </div>
                    }
                </StaggeredMotion>
            </div>
        );
    }
}