import React from 'react';
import Resume from './Resume';
import NavBar from './NavBar';
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
        <div className="App-Col top-pad">
            <img className="img-responsive" src={Will} alt="Will"/>
        </div>
        <div className="App-Col top-pad left-pad-less">
            <img className="img-responsive" src={Jett} alt="Jett"/>
        </div>
      </div>
      <div className="App-Rows">
      <div className="App-Col left-pad">
          <Resume/>
        </div>
        <div className="App-Col right-pad">
          <NavBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
/** <div className="App-Col top-pad">
            <img className="img-responsive" src={networkPic} alt="Will"/>
        </div>*/