import React, { Component } from 'react';
export default class Resume extends Component{
    render(){
        return(
            <div className="resume">
                <h3>EDUCATION</h3>
                <h4>University of British Columbia <span>Graduated May 2017</span></h4>
                <span>BA, Computer Science</span>
                <h3>WORK EXPERIENCE</h3>
                <h4>West Coast Liquor Company, Vancouver <span>June 2018 — Present</span></h4>
                <span>Supervisor</span>
                <p><strong>· Performance Reports:</strong> Evaluated employees’ reliability and professionalism, and summarized my observations to the general manager in weekly performance reviews. These reports were the main deciding factor of raises and promotions.</p>
                <p><strong>· Onboarding:</strong> Mentored new employees on their responsibilities, including workplace safety, stocking the store, managing the till and receiving deliveries.</p>
                <p><strong>· Customer Service:</strong> Provided personalized wine and beer recommendations to clients, considering food pairings, events, price and preference.</p>
                <p><strong>· Organization:</strong> Improved workplace productivity by developing a new labeling system and delegating work. Submitted daily invoices and tracked employee hours.</p>
                <p><strong>· Product Selection:</strong> Advised manager on product selection. Represented company at local industry events and met with sales representatives to gather data on new products. Appraised products’ marketability, flavor and cost to determine their viability with our clients. Chose wine samples to display each week.</p>
                <h3>PERSONAL PROJECTS</h3>
                <p><strong>· Peer-To-Peer Data Distribution Client:</strong> Built a fault-tolerant p2p client in Go using the net and rpc libraries. Clients ensured that data reached its intended target.</p>
                <p><strong>· Vancouver Art Map:</strong> Built a Django web-app which displays art pieces throughout Vancouver, using data sourced from the Covapp Public Art Registry. The data was rendered using the Google Maps JavaScript API.</p>
                <p><strong>· Football Survivor League:</strong> Implemented a Football fantasy survivor league using PHP, Apache and MySQL. The app displays the next week’s NFL schedule, and allows a user to submit their picks for the week and view pick history.</p>
                <p><strong>· Autoplay Extension:</strong> Built a Chrome extension in JavaScript to automatically continue watching videos on a cartoon viewer application, rather than requiring user input.</p>
            </div>
        );
    }
}