import React from 'react';

import './App.css';
import education from './images/education.jpg';
import firstExperience from './images/experience_1.jpg';
import secondExperience from './images/experience_2.jpg';
import skills from './images/skills.jpg';
import relevantCourses from './images/relevant_coursework.jpg';


function Resume() {
    return (
        <div className="App container-fluid right-pad left-pad-less">
            <div className="App-Row">
              <div className="App-Col top-pad">
                <img className="img-responsive App-Image" src={education} alt="Education"/>
              </div>
              <div className="App-Col top-pad">
                <img className="img-responsive App-Image" src={skills} alt="skills"/>
              </div>
            </div>
            <div className="App-Rows">
              <div className="App-Col">
                <div className="App-Row">
                  <div className="App-Col top-pad">
                    <img className="img-responsive App-Image" src={firstExperience} alt="firstExperience"/>
                  </div>
                </div>
                <div className="App-Row">
                  <div className="App-Col top-pad right-pad">
                    <img className="img-responsive App-Image" src={secondExperience} alt="secondExperience"/>
                  </div>
                </div>
              </div>
              <div className="App-Col top-pad">
                <img className="img-responsive App-Image" src={relevantCourses} alt="relevantCourses"/>
              </div>
            </div>
        </div>
    );
  }

export default Resume;