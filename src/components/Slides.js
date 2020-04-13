import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const Slides = (Res, Home, Pros) => {
    class Wrapper extends React.PureComponent{
        render() {
            const { index } = this.props.state;
            return(
                <SwipeableViews index={ index } onChangeIndex={ this.props.handleChangeIndex } >
                    <Res />
                    <Home />
                    <Pros />
                </SwipeableViews>
            );
        }
    }
    return Wrapper;
}

export default Slides;