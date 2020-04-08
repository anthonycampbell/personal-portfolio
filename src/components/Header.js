import React, { Component } from 'react';

export default class Header extends Component{
    render(){
        return (
            <header>
                    <nav>
	                    <ul>
		                    <a href='#resume' id='resume' className='target' onClick={ this.props.handleChange }>Resume</a>
		                    <a href='#home' id='home' className='target' onClick={ this.props.handleChange }>Home</a>
		                    <a href='#project' id='project' className='target' onClick={ this.props.handleChange }>Projects</a>
		                </ul>
	                </nav>
             </header>
        );
    }
}