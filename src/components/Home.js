import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        return (
            <div className="profile">
	            <h1>Anthony Campbell</h1>
	            <img src="profilePic.jpeg" alt="profile pic" />
		        <h3>About me</h3>
		        <p> I am currently working outside of my field. I am eager to break in to software development. I 
					graduated with a bachelors in computer science from UBC. I am looking for some kind of entry role.
					I am most interested in distributed systems because it was my favourite class, so, eventually I 
					might like to do that, although I think I would need more practice in that area to make my most 
					positive impact. To be honest, I just want to sharpen my hacking skills as much as I can. Working
					on projects that people will actually use would mean a lot to me. Something I can point to and say
					I made this would make me feel proud. The problems that software developers are challenged with 
					are the kinds of problems that keep me interested. I like the feeling of learning that I get when
					I draw some different possibilities for a problem and then encapsulate those for the solution. 
					This will sound silly, but I love being a developer because it makes me feel like Mr Robot or
					something.</p>
            </div>
        );
    }
}