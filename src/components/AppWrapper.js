import React from 'react';

const appWrapper = (Content) => {
    class Wrapper extends React.PureComponent{
        render(){
            return (
                <div id="content-wrapper">
                    <Content />
                </div>
            );
        }
    }
    return Wrapper;
}

export default appWrapper;