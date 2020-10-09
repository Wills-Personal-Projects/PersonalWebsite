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
                    <Project name='Nomadic Camping App' githubUrl={'https://nomadic1995.firebaseapp.com'} />
                </div>
                <div className="App-Proj-Row">
                    <Project name='Nomadic Camping App Wiki' githubUrl={'https://nomadic-frontend-wiki-1995.web.app'} />
                </div>
                <div className="App-Proj-Row">
                    <Project name='Nomadic App Github' githubUrl={'https://github.com/Wills-Personal-Projects/NomadicReactApp'} />
                </div>
                <div className="App-Proj-Row">
                    <Project name='Nomadic Backend Wiki' githubUrl={'https://nomadic-backend-wiki-1995.web.app'} />
                </div>
                <div className="App-Proj-Row">
                    <Project name='Campsite Service Github' githubUrl={'https://github.com/Wills-Personal-Projects/campsiteService'} />
                </div>
                <div className="App-Proj-Row">
                    <Project name='This Website Wiki' githubUrl={'https://my-website-wiki-1995.web.app'} />
                </div>
                <div className="App-Proj-Row">
                    <Project name='This Website Github' githubUrl={'https://github.com/Wills-Personal-Projects/PersonalWebsite'} />
                </div>
            </div>
        </div>
    );
}

export default NavBar;