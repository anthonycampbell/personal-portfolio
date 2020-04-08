import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        return (
            <div className="profile">
	            <h1>Anthony Campbell</h1>
	            <img src="profile_pic.png" alt="profile pic" />
		        <h3>About me</h3>
		        <p>Slave spirituals often had hidden double meanings.On one level,spirituals referenced heaven, Jesus,
                    and the soul, but on another level, the songs spoke about slave resistance. For example, according
			        to Frederick Douglass, the song “O Canaan, Sweet Canaan” spokeof slaves’ longing for heaven, but it
			        also expressed their desire to escape to the North. Careful listeners heard this second meaning in
			        the following lyrics: “I don’t expect to stay / Much longer here. / Run to Jesus, shun the danger. /
			        I don’t expect to stay.” When slaves sang this song, they could have been speaking of their
			        departure from this life and their arrival in heaven; however, they also could have been describing
			        their plans to leave the South and run, not to Jesus, but to the North. Slaves even used songs like
			        “Steal Away to Jesus (at midnight)” to announce to other slaves the time and place of secret,
			        forbidden meetings. What whites heard as merely spiritual songs, slaves discerned as detailed
			        messages. The hidden meanings in spirituals allowed slaves to sing what they could not say.</p>
            </div>
        );
    }
}