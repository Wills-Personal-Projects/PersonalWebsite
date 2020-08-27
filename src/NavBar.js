import React from 'react';

import './App.css'
import Project from './Project';
import projects from './images/projects.jpg';

function NavBar(){
    return(
        <div className="container-fluid left-pad">
            
            <div className="App-Row top-pad btm-pad">
                <img className="img-responsive" src={projects} alt="Projects"/>
            </div>
            <div className="proj-card">
            <div className="App-Proj-Row">
                <Project name='Web Service' githubUrl={'https://github.com/Wills-Personal-Projects/SupplyDemandWebService'} />
            </div>
            <div className="App-Proj-Row">
                <Project name='Web Client' githubUrl={'https://github.com/Wills-Personal-Projects/SupplyDemandClientApp'} />
            </div>
            <div className="App-Proj-Row">
                <Project name='Nomadic Camping App' githubUrl={'https://nomadic1995.firebaseapp.com'} />
            </div>
            <div className="App-Proj-Row">
                <Project name='This Website' githubUrl={'https://github.com/Wills-Personal-Projects/PersonalWebsite'} />
            </div>
            </div>
        </div>
    );
}

export default NavBar;