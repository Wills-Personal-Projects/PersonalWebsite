import React from 'react';

import NavBar from './NavBar';
import firstExperience from './images/my_experience_1.JPG';
import secondExperience from './images/my_experience_2.JPG';
import skills from './images/my_skills.JPG';
import relevantCourses from './images/my_coursework.JPG';
import education from './images/my_education.JPG';
import Will from './images/website_heading.jpg';
import Jett from './images/jett.jpg';
import InfoCard from './InfoCard.js';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      
      <div className="App-Title-Row">
        
        <div className="App-Col top-pad">
          <InfoCard/>
        </div>

        <div className="App-Row top-pad">
          <div className="App-Col">
            <img className="img-responsive" src={Will} alt="Will"/>
          </div>
          <div className="App-Col left-pad-100">
            <img className="img-responsive" src={Jett} alt="Jett"/>
          </div>
        </div>
      
      </div>
      
      <div className="App-Rows">
        <div className="App-Col">
          <div className="App-Row top-pad">
            <img className="img-responsive App-Image" src={education} alt="Education"/>
          </div>
          <div className="App-Row top-pad">
            <img className="img-responsive App-Image" src={firstExperience} alt="firstExperience"/>
          </div>
          <div className="App-Row top-pad right-pad">
            <img className="img-responsive App-Image" src={secondExperience} alt="secondExperience"/>
          </div>
        </div>
        <div className="App-Col">
          <div className="App-Row top-pad">
            <img className="img-responsive App-Image" src={skills} alt="skills"/>
          </div>
          <div className="App-Row top-pad">
            <img className="img-responsive App-Image" src={relevantCourses} alt="relevantCourses"/>
          </div>
        </div>
        <div className="App-Col">
          <NavBar/>
        </div>  
      </div>
    
    </div>
  );
}

export default App;