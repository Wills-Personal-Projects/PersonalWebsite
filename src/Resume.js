import React from 'react';

import './App.css';
import education from './images/my_education.JPG';
import firstExperience from './images/my_experience_1.JPG';
import secondExperience from './images/my_experience_2.JPG';
import skills from './images/my_skills.JPG';
import relevantCourses from './images/my_coursework.JPG';


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